import React, { useState } from "react";

const UseStateArray = () => {
  const [Name, setName] = useState('');
  const [Comment, setComment] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Name && Comment){
      const person = {id: new Date().getTime().toString(),Name, Comment}
      setPeople((people) => {
        return [person, ...people]
      })
      setName('');
      setComment('');
    } else {
      console.log("empty values")
    }
  };

  const deleteItem = (id) => {
   let newPeople = people.filter((person) => person.id !== id);
   setPeople(newPeople);
  }
  return(
  <>
  <article className="bg-gray- text-white"> 
   <div className="max-w-xl mx-auto p-6 bg-gray-800 rounded-lg mt-10">
    <h2 className="text-xl font-semibold mb-4">How can we ensure Al systems remain aligned with human values and ethics?</h2>
    <h3 className="Discussion">Discussion({people.length})</h3>
    <form className="mb-6">
        <input className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400" 
        type="text" 
        id="Name" 
        name="Name" 
        value={Name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"/>
        <textarea className="w-full p-3 mt-3 rounded bg-gray-700 text-white placeholder-gray-400" rows="3"
        type="text" 
        id="Comment" 
        name="Comment" 
        value={Comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment" ></textarea>
      <button className="mt-3 bg-blue-600 hover:bg-blue-700 text white font-semibold py-2 px-4 rounded" type="submit" onClick={handleSubmit}>Post comment</button>
    </form>
    <div className="border-t border-gray-700 pt-4">
    {
      people.map((person) => {
        const {id, Name, Comment} = person;
        return <div className="flex items-start"key={id}>
          <div className="w-10 h-10 rounded-full bg-gray-600 flex-shrink-0"></div>
          <div className="ml-4">
            <p className="text-sm font-semibold">{Name}<span className="text-gray-400">Today</span></p>
            <p className="text-gray-300 mt-1">{Comment}</p>
           <button className="mt-2 text-red-600 hover:text-red-700 text-sm" type="submit" onClick={() => deleteItem(id)}>Delete</button>
        </div>
     </div>
      })
    }
    </div>
    </div>
  </article>
  </>
  )
}

export default UseStateArray;