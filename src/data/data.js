const filesystem =
{
	name: "main folder",
	folder: true,
	children: [
		{
			name: "sub folder 1",
			folder: true,
			children: [
				{
					name: "subsub folder 1",
					folder: true,
					children: []
				},
				{
					name: "subsub file 2",
					folder: false,
					children: []
				},
				{
					name: "subsub file 3",
					folder: false,
					children: []
				},
			]
		},
		{
			name: "sub folder 2",
			folder: true,
			children: []
		},
		{
			name: "sub file 3",
			folder: false,
			children: []
		}
	]
};
export default filesystem;