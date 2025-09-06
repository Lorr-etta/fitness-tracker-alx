import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchExercises } from "../../utils/fetchData";

const SearchExercises = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [clicked, setClicked] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const exercisesData = await fetchExercises();
        setExercises(exercisesData.filter(ex => ex.name)); 

        const res = await fetch("https://wger.de/api/v2/exercisecategory/");
        const bodyPartsData = await res.json();
        setBodyParts(["all", ...bodyPartsData.results.map(bp => bp.name)]);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => setSearchTerm(e.target.value);

  const handleSearch = () => {
    if (!searchTerm) return;

    const searchedExercises = exercises.filter(ex => {
      const term = searchTerm.toLowerCase();
      return (
        (ex.name && ex.name.toLowerCase().includes(term)) ||
        (ex.category && ex.category.name && ex.category.name.toLowerCase().includes(term))
      );
    });

    console.log("Search results:", searchedExercises);
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="49px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position="relative" mb="72px" width="100%" maxWidth="600px">
        <TextField
          fullWidth
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search Exercises"
          sx={{ backgroundColor: "#ffe5e5ff", color: "#fff" }}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            backgroundColor: "#f1f1f1",
            color: "#FF4500",
            borderRadius: "12px",
            border: "2px solid rgb(79, 152, 79)",
            fontWeight: "bold",
            transition: "all 0.3s ease",
            transform: clicked ? "translateX(10px) scale(1.05)" : "translateX(0) scale(1)",
            "&:hover": {
              backgroundColor: "#f1bcfc",
              transform: clicked
                ? "translateX(10px) scale(1.05)"
                : "translateX(0) scale(1.05)",
            },
          }}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;