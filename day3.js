//question 1: for given json iterate all for loops

let json1 = { "name": "Raj", "age": 23, "city": "Chennai" };
for (let key in json1) {
  console.log(key + ": " + json1[key]);
}



let json2 = { "name": "Rohit", "age": 30, "city": "Mumbai" };
Object.keys(json2).forEach(function(key) {
  console.log(key + ": " + json2[key]);
});


let json3 = { "name": "John", "age": 45, "city": "New York" };
Object.entries(json3).forEach(([key, value]) => {
  console.log(key + ": " + value);
});
  

//question 2: create your own resume data in json format

let resume = {
    "name": "Thilagaraj",
    "contact": {
        "email": "Thilagaraj159@gmail.com",
        "phone": "8778295077",
        "Address": "10-c, Aadhi Narayana Puram street, Thirunagaram, Aruppukottai-626101"
    },
    "summary": "Skilled in building efficient and scalable web applications.",
    "experience": 
      {
            "title": "Store-Purchase(Asst)",
            "company": "SGM pvt ltd",
            "location": "Aruppukottai",
            "experienceInYears": "2 years",
        },
       
    
    "education": [
        {
            "degree": "Bachlor of computer application",
            "college": "Madurai kamarajar university",
            "dates": "2017-2020",
            "location": "Aruppukottai"
        }
    ],
    "skills": [
        "C",
        "c++",
        "JavaScript",
        "Web Development"
    ]
}
console.log(resume);