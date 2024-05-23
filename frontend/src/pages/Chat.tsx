import React from "react";
import { Box, Avatar, Typography, Button } from "@mui/material";
import red from "@mui/material/colors/red";
import { useAuth } from "../context/AuthContext";

const chatMessages = [
  {
    role: "Assistant",
    content: "Hello! How can I assist you today?",
  },
  {
    role: "User",
    content: "I need help with my homework.",
  },
  {
    role: "Assistant",
    content: "Sure, I'd be happy to help! What subject are you working on?",
  },
  {
    role: "User",
    content: "I'm struggling with math, specifically algebra.",
  },
  {
    role: "Assistant",
    content: "Alright, let's tackle it together. What algebra problem are you working on?",
  },
  {
    role: "User",
    content: "I don't understand how to solve equations with variables on both sides.",
  },
  {
    role: "Assistant",
    content: "To solve equations with variables on both sides, you need to get all the variables on one side and the constants on the other. Would you like a step-by-step example?",
  },
  {
    role: "User",
    content: "Yes, please!",
  },
  {
    role: "Assistant",
    content: "Sure thing! Let's solve the equation 3x + 2 = x + 10. First, subtract x from both sides to get the variables on one side: 3x - x + 2 = 10. What does that simplify to?",
  },
  {
    role: "User",
    content: "That simplifies to 2x + 2 = 10.",
  },
  {
    role: "Assistant",
    content: "Great! Now, subtract 2 from both sides to isolate the variable term: 2x = 8. What should you do next?",
  },
  {
    role: "User",
    content: "Divide both sides by 2 to get x by itself.",
  },
  {
    role: "Assistant",
    content: "Correct! So, x = 4. You've got it! Do you have any other questions about algebra?",
  },
  {
    role: "User",
    content: "No, that was very helpful. Thank you!",
  },
  {
    role: "Assistant",
    content: "You're welcome! If you have any more questions in the future, feel free to ask.",
  },
];

const Chat = () => {
  const auth = useAuth();
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: { md: "flex", xs: "none", sm: "none" },
          flex: 0.2,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "60vh",
            bgcolor: "rgb(17,29,39)",
            borderRadius: 5,
            flexDirection: "column",
            mx: 3,
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              my: 2,
              bgcolor: "white",
              color: "black",
              fontWeight: 700,
            }}
          >
            {auth?.user?.name[0]}
            {auth?.user?.name.split(" ")[1][0]}
          </Avatar>
          <Typography sx={{ mx: "auto", fontFamily: "work sans" }}>
            You are talking to a ChatBot
          </Typography>
          <Typography sx={{ mx: "auto", fontFamily: "work sans", my: 4, p: 3 }}>
            You can ask some questions related to Knowledge, Business,
            Advices,Education, etc. But avoid sharing personal information
          </Typography>
          <Button
            sx={{
              width: "200px",
              my: "auto",
              color: "white",
              fontWeight: "700",
              borderRadius: 3,
              mx: "auto",
              bgcolor: red[300],
              ":hover": {
                bgcolor: red.A400,
              },
            }}
          >
            Clear Conversation
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: { md: 0.8, xs: 1, sm: 1 },
          flexDirection: "column",
          px: 3,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "40px",
            color: "white",
            mb: 2,
            mx: "auto",
            fontWeight: 600,
          }}
        >
          Model - GPT 3.5 Turbo
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "60vh",
            borderRadius: 3,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            overflowX: "hidden",
            overflowY: "auto",
            scrollBehavior: "smooth",
            bgcolor: "rgb(34,34,34)",
            p: 2,
          }}
        >
          {chatMessages.map((message, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: message.role === "User" ? "flex-end" : "flex-start",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  bgcolor: message.role === "User" ? "rgb(56,56,56)" : "rgb(43,43,43)",
                  color: "white",
                  p: 2,
                  borderRadius: 3,
                  maxWidth: "75%",
                }}
              >
                <Typography>{message.content}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
