import React, { useEffect, useRef, useState } from "react";

export const TeacherJS = () => {
  const [data, setData] = useState([]);
  const isLoding = useRef(true);
  const [open, setOpen] = useState({});
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("src/Components/Json/Teacher.json");
        const Teachers = await res.json();
        setData(Teachers);
      } catch (error) {
        console.error(error);
      }
    };
    if (isLoding.current) {
      fetchData();
      isLoding.current = false;
    }
  }, []);

  const handleCommentClick = (id) => {
    setOpen({ ...open, [id]: !open[id] });
  };

  const handleAddComment = (id) => {
    setComments({
      ...comments,
      [id]: [...(comments[id] || []), newComment[id]],
    });
    setNewComment({ ...newComment, [id]: "" });
  };
  return {
    data,
    handleAddComment,
    handleCommentClick,
    comments,
    newComment,
    setComments,
    setNewComment,
    open,
  };
};

export default TeacherJS;
