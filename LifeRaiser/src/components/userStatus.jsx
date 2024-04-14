import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import userPhoto from '../assets/userdetailsProfile.jpg'
import { getDatabase, ref, set, get } from "firebase/database";
import { app } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut, getAuth, onAuthStateChanged } from "firebase/auth";


const auth = getAuth(app);    
const db = getDatabase(app);

const [userDetails, setUserDetails] = useState(null);
function UserDetails(props) {
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(ref(db, `user/0Sie8F3Z7yVAjeyeFrSs7aAUStQ2`));
        const data = snapshot.val();
        setUserDetails(data);
        console.log(data.userid, "user statics created");
      } catch (error) {
        console.error("Error fetching userDetails:", error);
      }
    };

    fetchData();
  }, [db]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //       try {
  //           const snapshot = await get(ref(db, `user/0Sie8F3Z7yVAjeyeFrSs7aAUStQ2`));
  //           userDetails = snapshot.val();
  //           setUserDetails(userDetails);
  //           const fetchedage = userDetails.age;
  //           const fetchedyourId = userDetails.userid;
  //           console.log(fetchedyourId, "user statics created");
  //       } catch (error) {
  //           console.error("Error fetching userDetails:", error);
  //       }
  //     }
  //   });

  //   fetchData();

    // Cleanup function
    if (!userDetails) {
      // Render loading or placeholder UI while userDetails is null
      return <div>Loading...</div>;
    }
  

  
  // comment db,`user/${userid}`
 







  
    const { userid, userPhoto } = props;

    return (
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src={userPhoto} alt="User's Avatar" />
          </div>
          <div className="p-8 flex justify-evenly">
            <div>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold underline">{userDetails.name}</div>
            <p className="mt-2 text-gray-500 font">Email: {userDetails.email}</p>
            <p className="mt-2 text-gray-500">Age: {userDetails.age}</p>
            </div>
            <div>
            <p className="mt-2 text-gray-500">Location: {userDetails.location}</p>
            <p className="mt-2 text-gray-500">Occupation: {userDetails.occupation}</p>
            <p className="mt-2 text-gray-500">Funding: {userDetails.funding}</p>
            </div>
          </div>
          
        </div>
      </div>
    );
  }


export default UserDetails;

