import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CommentInterface } from "../../types";
import {
  Button,
  DialogTitle,
  FormControl,
  Input,
  InputLabel,
  Menu,
  MenuItem,
  Modal,
  Rating,
  Select,
  Stack,
} from "@mui/material";
import Add from "@mui/icons-material/Add";
import { useRef, useState } from "react";
import { ModalDialog } from "@mui/joy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { MdCloudDone } from "react-icons/md";

interface postComment {
  text: string;
  author: string;
  rating: number;
}

const CommentClothes = () => {
  const queryClient = new QueryClient();
  const [open, setOpen] = useState<boolean>(false);
  const [rating, setRating] = useState<number | null>(null);

  const authorRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLInputElement>(null);

  const { id } = useParams<{ id: string }>();

  // Fetch API
  const { data, isLoading, error } = useQuery({
    queryKey: ["comment", id],
    queryFn: () =>
      axios
        .get(
          `https://6787c747c4a42c9161083855.mockapi.io/clothes/${id}/comments`
        )
        .then((res) => res.data),
  });

  // Add comment mutation
  const mutation = useMutation({
    mutationFn: ({ body }: { body: postComment }) =>
      axios
        .post(
          `https://6787c747c4a42c9161083855.mockapi.io/clothes/${id}/comments`,
          body
        )
        .then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comment", id] });
    },
  });

  // Delete comment mutation
  const deleteMutation = useMutation({
    mutationFn: (commentId: string) =>
      axios
        .delete(
          `https://6787c747c4a42c9161083855.mockapi.io/clothes/${id}/comments/${commentId}`
        )
        .then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comment", id] });
    },
  });

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  // Map comments
  const Commments: JSX.Element[] | undefined = data?.map(
    (item: CommentInterface) => (
      <div
        key={item.id}
        className="border border-black rounded-3xl w-[500px] flex flex-col gap-y-2 p-5"
      >
        <div className="flex justify-between ">
          <Rating readOnly value={item.rating} />

          <div onClick={handleClick}>
            <MoreHorizIcon />
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleCloseMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() => {
                deleteMutation.mutate(item.id);
                handleCloseMenu();
              }}
            >
              Delete
            </MenuItem>
          </Menu>
        </div>
        <h2 className="text-xl font-bold flex items-center gap-1 ">
          {item.author} <MdCloudDone className="text-green-900 text-3xl" />
        </h2>

        <p>{item.text}</p>
        <p>
          Posted on{" "}
          {new Date(item.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    )
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newComment = {
      author: authorRef.current?.value || "",
      text: textRef.current?.value || "",
      rating: rating || 0,
    };

    mutation.mutate({ body: newComment });
    setOpen(false);
  };

  return (
    <div className="container comment pt-20 pr-5">
      <div className="flex justify-between px-3">
        <h1 className="text-4xl font-bold ">Comments</h1>
        <button
          onClick={() => setOpen(true)}
          className="rounded-3xl border px-5 py-2 hover:bg-black hover:text-white"
        >
          New Comment
        </button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog>
            <DialogTitle>Create New Comment</DialogTitle>
            <form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <Input
                  autoFocus
                  required
                  placeholder="Author"
                  inputRef={authorRef}
                />
                <Input
                  required
                  placeholder="Comment Writing"
                  inputRef={textRef}
                />
                <FormControl fullWidth>
                  <InputLabel id="rating-label">Rating</InputLabel>
                  <Select
                    labelId="rating-label"
                    value={rating?.toString() || ""}
                    onChange={(event) =>
                      setRating(parseInt(event.target.value))
                    }
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </Select>
                </FormControl>
                <Button type="submit" disabled={mutation.isLoading}>
                  Submit
                </Button>
              </Stack>
            </form>
          </ModalDialog>
        </Modal>
      </div>
      <div className="pl-5 flex gap-10 pt-10 flex-wrap gap-y-10">
        {Commments}
      </div>
    </div>
  );
};

export default CommentClothes;
