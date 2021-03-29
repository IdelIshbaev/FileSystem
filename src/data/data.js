const filesystem =
{
	name: "main folder",
	folder: true,
	children: [
		{
			name: "first layer 1",
			folder: true,
			children: [
				{
					name: "second layer 1",
					folder: true,
					children: []
				},
				{
					name: "second layer file 1",
					folder: false,
					children: []
				},
				{
					name: "second layer file 2",
					folder: false,
					children: []
				},
			]
		},
		{
			name: "first layer 2",
			folder: true,
			children: [
								{
					name: "second.2 layer 1",
					folder: true,
					children: []
				},
				{
					name: "second.2 layer file 1",
					folder: false,
					children: []
				},
				{
					name: "second.2 layer file 2",
					folder: false,
					children: []
				},
			]
		},
		{
			name: "first layer file 1",
			folder: false,
			children: []
		}
	]
};
export default filesystem;