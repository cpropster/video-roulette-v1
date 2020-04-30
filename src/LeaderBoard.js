import React, { useState, useEffect } from "react";
import axios from "axios";

const LeaderBoard = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [tabulatedVotees, setTabulatedVotees] = useState([])
  const [topTen, setTopTen] = useState([]);
  const [bottomTen, setBottomTen] = useState([]);
  const [rankTopBottom, setRankTopBottom] = useState([]);

  //3) create array of  get num of up/down votes
  //   this is a super expensive operation
  const tabulateVotes = () => {
    const temp = allUsers.map(async (user) => {
      const votee = {}
      votee.username = user.userName;
      votee.up = 0;
      votee.down = 0;
      votee.voteCount = 0;
      const votes = await axios.get(`/api/vote/votee/${user.userName}`); 
      votes.data.forEach(vote => {
        votee.voteCount++;
        if (vote.voteDirection === "up") {
          votee.up++;
        } else {
          votee.down--;
        }
      });
      return votee;
    });
    Promise.all(temp)
    .then(values => setTabulatedVotees(values))
  }

  //1) get all the users
  useEffect(() => {
    axios.get("/api/users")
      .then(users => setAllUsers(users.data));
  }, []);

  //2) calltabulate when all the users are here
  useEffect(() => {
    tabulateVotes();
  }, [allUsers]);

  useEffect(() => {
    //calcAscending();
  }, [tabulateVotes])

  return (
    <div id="leaderboard-container">
      <h3>in the leaderboard</h3>

    </div>
  )
}

export default LeaderBoard;