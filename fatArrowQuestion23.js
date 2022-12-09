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
    eligibleForPlacement(marks){
        return (age) => {
            if(this.age>age && this.marks>marks)
                return true;
            return false;
        }
    }
}
const amruth = new Student('Amruth', 23, '8921412285', 100);
const akash = new Student('Akash', 25, '8921412285', 80);
const akshay = new Student('Akshay', 33, '8921412285', 60);
const athul = new Student('Athul', 27, '8921412285', 40);
const robin = new Student('Robin', 29, '8921412285', 20);

const arr = [amruth, akash, akshay, athul, robin];

for(let i=0; i<arr.length; i++){
    if(arr[i].eligibleForPlacement(50)(25))
        console.log(arr[i].name);
}