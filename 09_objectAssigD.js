let professor = {
name: "Sachin",
department: "Computer Science",
subject: "JavaScript",
salary: 50000,
address: "Bangalore"
}
console.table(professor);
console.log(`******************************************************\n`);

professor.degree= {
    engineering: "CSC",
    PHD: "Adv    Computing",
    MPhil: "Computer"
}
console.table(professor.degree);
console.log(`******************************************************\n`);

professor.certificate = ["Hacker Rank Participation", "Certificate in IFE course", "Certificate in Adv Programming"]
console.table(professor.certificate);
console.log(`******************************************************\n`);

professor.totalExperience="14 years";
console.log(`Total experience= ${professor.totalExperience}\n`);
console.log(`******************************************************\n`);

professor.salary= 60000;
console.table(`Updated salary= ${professor.salary}\n`);
console.log(`******************************************************\n`);

professor.certificate.push("Oracle Certified");
console.log(`One more certificate added in certificate array- `);
console.table(professor.certificate);
console.log(`The last element in certificate array- `);
//let val = professor.certificate.length-1;
console.log(professor.certificate[professor.certificate.length-1]);

console.log(`******************************************************\n`);

console.log(`Traverse the array by using 'for of' loop.\n`);
for (let index of professor.certificate) {
    console.log(index);
}

console.log(`******************************THE END******************************`);