import React from "react";
import "./Teacher.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import TeacherJS from "./TeacherJS";

const ListTeachers = () => {
  const {
    data,
    handleAddComment,
    handleCommentClick,
    comments,
    newComment,
    setNewComment,
    open,
  } = TeacherJS();

  return (
    <List className="List">
      {data &&
        data.map((teacher) => (
          <ListItem key={teacher.id} className="listItem">
            <div className="containeritem">
              <div className="item">
                <Avatar
                  alt={teacher.name}
                  src={teacher.image}
                  sx={{
                    width: "clamp(50px,100px,150px)",
                    height: "clamp(50px,100px,150px)",
                  }}
                />

                <ListItemText
                  className="ListItemText"
                  primary={` الاسم : ${teacher.name} ${teacher.lastname}`}
                  secondary={`${teacher.education}`}
                ></ListItemText>

                <button
                  className="Button"
                  onClick={() => handleCommentClick(teacher.id)}
                >
                  <i className="fa-solid  fa-comment"></i>
                </button>
              </div>

              <div className="commeint">
                <Collapse
                  in={open[teacher.id]}
                  className="Collapse"
                  timeout="auto"
                  unmountOnExit
                >
                  <div className="contaainer_in_commint">
                    <input
                      type="text"
                      placeholder="اضف تعليقاً"
                      className="textfiled"
                      value={newComment[teacher.id] || ""}
                      onChange={(e) =>
                        setNewComment({
                          ...newComment,
                          [teacher.id]: e.target.value,
                        })
                      }
                    ></input>
                    <button
                      className="buuton"
                      onClick={() => handleAddComment(teacher.id)}
                    >
                      إضافة
                    </button>
                  </div>
                  {comments[teacher.id] && comments[teacher.id].length > 0 && (
                    <div className="listcomaints">
                      <List component="div">
                        {comments[teacher.id].map((comment, index) => (
                          <ListItem key={index}>
                            <ListItemText primary={comment} />
                          </ListItem>
                        ))}
                      </List>
                    </div>
                  )}
                </Collapse>
              </div>
            </div>
          </ListItem>
        ))}
    </List>
  );
};

export default ListTeachers;
