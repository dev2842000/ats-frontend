
import React, { useContext, useEffect, useState } from 'react'
// import { Rating } from '@smastrom/react-rating'

// import '@smastrom/react-rating/style.css'
import { LoaderCircle } from 'lucide-react'
// import GlobalApi from './../../../../../service/GlobalApi'
import { toast } from 'sonner'
import CustomInput from '@/Component/CommonComponents/CustomInput'
import Button from '@/Component/CommonComponents/Button'
function Skills() {

    // const [skillsList,setSkillsList]=useState([{
    //     name:'',
    //     rating:0
    // }])

    // const [loading,setLoading]=useState(false);
    // const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);
   
    // useEffect(()=>{
    //     resumeInfo&&setSkillsList(resumeInfo?.skills)
    //   },[resumeInfo])
   
    // const handleChange=(index,name,value)=>{
    //     const newEntries=skillsList.slice();
      
    //     newEntries[index][name]=value;
    //     setSkillsList(newEntries);
    // }

    // const AddNewSkills=()=>{
    //     setSkillsList([...skillsList,{
    //         name:'',
    //     rating:0 
    //     }])
    // }
    // const RemoveSkills=()=>{
    //     setSkillsList(skillsList=>skillsList.slice(0,-1))
    // }

    // const onSave=()=>{

    //     setLoading(true);
    //     const data={
    //         data:{
    //             skills:skillsList.map(({ id, ...rest }) => rest)
    //         }
    //     }
    //     console.log(data);
        
    //     // GlobalApi.UpdateResumeDetail(resumeId,data)
    //     // .then(resp=>{
    //     //     console.log(resp);
    //     //     setLoading(false);
    //     //     toast('Details updated !')
    //     // },(error)=>{
    //     //     setLoading(false);
    //     //     toast('Server Error, Try again!')
    //     // })
    // }

    // useEffect(()=>{
    //     setResumeInfo({
    //         ...resumeInfo,
    //         skills:skillsList
    //     })
    // },[skillsList,resumeInfo,setResumeInfo])
  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
    <h2 className='font-bold text-lg'>Skills</h2>
    <p>Add Your top professional key skills</p>


    </div>
  )
}

export default Skills