import { useState, createContext, useEffect } from 'react';
import { singleProjectData as singleProjectDataJson } from '../data/singleProjectData';
import { projectsData } from '../data/projects';
import { useParams } from 'react-router-dom';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
	const [singleProjectData, setSingleProjectData] = useState(singleProjectDataJson);
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			const project = projectsData.find(p => p.id === parseInt(id));
			if (project) {
				setSingleProjectData({
					...singleProjectDataJson,
					ProjectHeader: {
						...singleProjectDataJson.ProjectHeader,
						title: project.title,
						tags: project.category,
					},
					ProjectImages: [
						{
							id: 1,
							title: project.title,
							img: project.img,
						},
					],
				});
			}
		}
	}, [id]);

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
