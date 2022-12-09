class Student{
    static count = 0;
    static totalObjects(){
        console.log(this.count);
    }
    constructor(name, age, phone, marks){
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.marks = marks;
        Student.count++;
    }
    isEligible(){
        if(this.marks>40)
            return true;
        return false;
    }
}
const amruth = new Student('Amruth', 23, '8921412285', 80);
const akash = new Student('Akash', 25, '8921412285', 80);
const akshay = new Student('Akshay', 33, '8921412285', 80);
const athul = new Student('Athul', 27, '8921412285', 80);
const robin = new Student('Robin', 29, '8921412285', 80);
Student.totalObjects();