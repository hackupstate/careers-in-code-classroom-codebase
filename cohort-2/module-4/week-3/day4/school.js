const schools = [
	{
		name: "High",
		teachers: [
			{
				name: "Mr. A",
				students: [
					{ studentNum: 1, grade: 100 },
					{ studentNum: 2, grade: 50 },
				],
			},
			{
				name: "Mrs. B",
				students: [
					{ studentNum: 4, grade: 0 },
					{ studentNum: 5, grade: 25 },
					// { studentNum: 3, grade: 100 },
				],
			},
		],
	},
	{ name: "Middle" },
	{ name: "Elementary" },
];

let count = 0;
let total = 0;
for (const teacher of schools[0].teachers) {
	for (const student of teacher.students) {
		count++;
		total += student.grade;
	}
	// console.log(teacher);
}
console.log(total, count);
console.log(`Average: ${total / count}`);
console.log("Average: " + total / count);

// let teacherNum = 1;
// let teacherProperty = "name";
// const teachersAtHighSchool = schools[0].teachers;
// const allStudentsGrades =
// 	teachersAtHighSchool[0].students[0].grade +
// 	teachersAtHighSchool[0].students[1].grade +
// 	teachersAtHighSchool[1].students[0].grade +
// 	teachersAtHighSchool[1].students[1].grade;

// console.log(`AverageGrade = ${allStudentsGrades / 4}`);

// const numArray = [1, 2, 3];
// const stringArray = ["A", "B", "C"];
// const objectArray = [{ name: "A" }, { name: "B" }, { name: "C" }];

// for (const i of stringArray) {
// 	console.log(i.name);
// }
// for (const school of schools) {
// 	console.log(school.name);
// }

// console.log(schools.join("*"));
// console.log(schools)
