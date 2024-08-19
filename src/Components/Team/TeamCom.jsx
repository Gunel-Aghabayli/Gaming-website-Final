import React from "react";
import style from "./TeamCom.module.css";
import { useSelector, useDispatch } from "react-redux";
import { SET_TEAM_MEMBERS } from "../../reducers/action.js";
import { useEffect } from "react";
import { supabase } from "../../supabase.js";
import Navbar from "../Navbar/Navbar.jsx";
import { Link, useSearchParams } from "react-router-dom";

const TeamCom = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const team = useSelector((state) => state.team);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const { data, error } = await supabase.from("team").select("*");

        if (error) {
          throw error;
        }

        dispatch({ type: SET_TEAM_MEMBERS, payload: data });
      } catch (error) {
        console.error("Error fetching team data:", error.message);
      }
    };

    fetchTeamData();
  }, [dispatch]);

  return (
    <div>
      <div className={style.bgabout}>
        <Navbar />
        <div className={style.content}>
          <h1>
            DEFINITIVE <span>TEAM</span>
          </h1>
        </div>
      </div>

      <div className={style.allTeam}>
        {team.map((member) => (
          <div key={member.id}>
            <img src={member.image} width='400px' height='430px'/>
            <div className={style.header}>
            <Link  to={`/teammates?members=${member.id}`}>{member.name}</Link>
            <h3>{member.head}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCom;
