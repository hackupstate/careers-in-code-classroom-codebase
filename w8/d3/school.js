const schools = [
	{
		type: "elementary",
		teachers: [
			{
				name: "Mr. Smith",
				class: "Pirate History",
				students: [
					"Toya Whitebeard",
					"Snooty Helge",
					"Cutthroat Sue The Daring",
				],
				grades: [94, 99],
			},
			{
				name: "Mr. Matthews",
				class: "Coding for Youngin's",
				students: ["Abigail Vera", "Estelle Sigmund"],
				grades: [75, 100],
			},
		],
	},
	{
		type: "middle",
		teachers: [
			{
				name: "Ms. Johnson",
				class: "Art",
				students: ["James Garcia", "Robert Miller"],
				grades: [90, 100],
			},
			{
				name: "Mr. Williams",
				class: "Science",
				students: ["John Brown", "Andy Jones"],
				grades: [60, 90],
			},
		],
	},
	{
		type: "high",
		teachers: [
			{
				name: "Ms. Thorne",
				class: "Theoretical Programming",
				students: ["Taylor Taylor", "Jackson Moore"],
				grades: [30, 64],
			},
		],
	},
];

//print out all the school types
console.log(schools[0].type);
console.log(schools[1].type);
console.log(schools[2].type);
let count = 0;
for (const school of schools) {
	count++;
	console.log(school.type);
}
console.log(count);

//print out all the teachers in the middle school
for (const teacher of schools[1].teachers) {
	console.log(teacher.name);
}

//print out all the class names along with the type of the school
for (const school of schools) {
	for (const teacher of school.teachers) {
		console.log(school.type + " - " + teacher.class);
	}
}

//print out all the students names
for (const school of schools) {
	for (const teacher of school.teachers) {
		for (const student of teacher.students) {
			console.log(student);
		}
	}
}

//print out the grade average for each teacher & school
for (const school of schools) {
	let schoolTotal = 0;
	let schoolCount = 0;
	for (const teacher of school.teachers) {
		//teachers
		let gradeCount = 0;
		let totalGrades = 0;
		for (const grade of teacher.grades) {
			//grades
			gradeCount++;
			totalGrades += grade;
			schoolCount++;
			schoolTotal += grade;
		} //end of grades loop
		console.log(teacher.name + ": " + totalGrades / gradeCount);
	} //end of teacher loop
	console.log(school.type + ": " + schoolTotal / schoolCount);
} //end of school loop
