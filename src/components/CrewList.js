import React from 'react';
import axios from 'axios';

function TeamList() {
	const [teams, setTeams] = useState([]);
	const teamUrl = "http://localhost:8000/api/team"

		useEffect (() => {
			axios
			.get(teamUrl)
			.then((res) => res.data)
			.then((data) => setTeams(data))
		}, [] )

	return (
		<div className="crewList">
			{teams.map((team) => (
				<div key={team.id}>
					<TeamCard team={team} />
				</div>
			))}
		</div>
)}

export default CrewList