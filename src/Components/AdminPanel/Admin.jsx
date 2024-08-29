import React, { useEffect, useState } from "react";
import style from './Admin.module.css'
import { supabase } from "../../supabase";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AdminDashboard = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [editingMember, setEditingMember] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      const { data, error } = await supabase.from("team").select("*");
      if (error) console.error("Error fetching team members:", error);
      else setTeamMembers(data);
    };
    fetchTeamMembers();
  }, []);

  const handleDelete = async (id) => {
    const { error } = await supabase.from("team").delete().eq("id", id);
    if (error) {
      console.error("Error deleting team member:", error);
      toast.error("Failed to delete team member.");
    } else {
      setTeamMembers(teamMembers.filter((member) => member.id !== id));
      toast.success("Team member deleted successfully.");
    }
  };

  const handleEditClick = (member) => {
    setEditingMember(member);
  };

  const handleSave = async () => {
    const { error } = await supabase
      .from("team")
      .update({
        name: editingMember.name,
        head: editingMember.head,
        info: editingMember.info,
        image: editingMember.image,
      })
      .eq("id", editingMember.id);

    if (error) {
      console.error("Supabase error details:", error);
      toast.error(`Failed to update team member: ${error.message}`);
    } else {
      setTeamMembers(
        teamMembers.map((member) =>
          member.id === editingMember.id ? editingMember : member
        )
      );
      setEditingMember(null);
      toast.success("Team member updated successfully.");
    }
  };

  return (
    <div>
      <h1 className={style.adminHead}>Admin Dashboard</h1>
      <ul className={style.ul}>
        {teamMembers.map((member) => (
          <li key={member.id}>
            {editingMember && editingMember.id === member.id ? (
              <div className={style.inputs}>
                <input
                  type="text"
                  value={editingMember.name}
                  onChange={(e) =>
                    setEditingMember({ ...editingMember, name: e.target.value })
                  }
                  placeholder="Name"
                />
                <input
                  type="text"
                  value={editingMember.head}
                  onChange={(e) =>
                    setEditingMember({ ...editingMember, head: e.target.value })
                  }
                  placeholder="Head"
                />
                <textarea rows='10' cols='30'
                  type="text"
                  value={editingMember.info}
                  onChange={(e) =>
                    setEditingMember({ ...editingMember, info: e.target.value })
                  }
                  placeholder="Info"
                />
                <input
                  type="text"
                  value={editingMember.image}
                  onChange={(e) =>
                    setEditingMember({ ...editingMember, image: e.target.value })
                  }
                  placeholder="Image URL"
                />
                <button className={style.save} onClick={handleSave}>Save</button>
              </div>
            ) : (
              <div>
              <img className={style.member} src={member.image} alt={member.name} width="150" />
                <h2>{member.name}</h2>   
                <h3>{member.head} </h3>
                <p>{member.info}</p>
                <button className={style.edit} onClick={() => handleEditClick(member)}>Edit</button>
                <button className={style.delete} onClick={() => handleDelete(member.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
};

export default AdminDashboard;
