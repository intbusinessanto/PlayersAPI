import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createPlayer, deletePlayer, getPlayer, updatePlayer } from "../api/players.api";
import { toast } from "react-hot-toast";

export function PlayersFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updatePlayer(params.id, data);
      toast.success("Player updated", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createPlayer(data);
      toast.success("New Player Added", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }

    navigate("/players");
  });

  useEffect(() => {
    async function loadPlayer() {
      if (params.id) {
        const { data } = await getPlayer(params.id);
        setValue("first_name", data.first_name);
        setValue("last_name", data.last_name);
      }
    }
    loadPlayer();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit} className="bg-zinc-800 p-10 rounded-lg mt-2">
        <input
          type="text"
          placeholder="first_name"
          {...register("first_name", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          autoFocus
        />

        {errors.first_name && <span>This field is required</span>}


        <input
          type="text"
          placeholder="last_name"
          {...register("last_name", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          autoFocus
        />

        {errors.last_name && <span>This field is required</span>}

        
        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Save
        </button>
      </form>

      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={async () => {
              const accepted = window.confirm("Are you sure?");
              if (accepted) {
                await deletePlayer(params.id);
                toast.success("Player Removed", {
                  position: "bottom-right",
                  style: {
                    background: "#101010",
                    color: "#fff",
                  },
                });
                navigate("/players");
              }
            }}
          >
            delete
          </button>
        </div>
      )}
    </div>
  );
}
