import React, { useContext, useEffect, useState } from 'react'
import RichTextEditor from '../RichTextEditor'
import { toast } from 'sonner'
import { LoaderCircle } from 'lucide-react'
import CustomInput from '@/Component/CommonComponents/CustomInput'
import Button from '@/Component/CommonComponents/Button'
import { useSelector } from 'react-redux'

const formField={
    title:'',
    companyName:'',
    city:'',
    state:'',
    startDate:'',
    endDate:'',
    workSummery:'',

}
function Experience() {
  const resumeInfo = useSelector((state) => state.resume.info); // Select resume info from Redux store
  const [experinceList,setExperinceList]=useState([]);
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
      resumeInfo?.experience.length>0&&setExperinceList(resumeInfo?.experience)
      
  },[])

  const handleChange=(index,event)=>{
      const newEntries=experinceList.slice();
      const {name,value}=event.target;
      newEntries[index][name]=value;
      console.log(newEntries)
      setExperinceList(newEntries);
  }

  const AddNewExperience=()=>{
  
      setExperinceList([...experinceList,{
          title:'',
          companyName:'',
          city:'',
          state:'',
          startDate:'',
          endDate:'',
          workSummery:'',
      }])
  }

  const RemoveExperience=()=>{
      setExperinceList(experinceList=>experinceList.slice(0,-1))
  }

  const handleRichTextEditor=(e,name,index)=>{
      const newEntries=experinceList.slice();
      console.log(newEntries[index]);
    //   newEntries[index][name]=e.target.value;
     
      setExperinceList(newEntries);
  }



  const onSave=()=>{
      setLoading(true)
      const data={
          data:{
              Experience:experinceList.map(({ id, ...rest }) => rest)
          }
      }

       console.log(experinceList)

  }
  return (
    <div>
        <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
        <h2 className='font-bold text-lg'>Professional Experience</h2>
        <p>Add Your previous Job experience</p>
        <div>
            {experinceList.map((item,index)=>(
                <div key={index}>
                    <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                        <div>
                            <CustomInput name="title" 
                            label="Position Title"
                            onChange={(event)=>handleChange(index,event)}
                            defaultValue={item?.title}
                            />
                        </div>
                        <div>
                            <CustomInput name="companyName" 
                            label="Company Name"
                            onChange={(event)=>handleChange(index,event)}
                            defaultValue={item?.companyName} />
                        </div>
                        <div>
                            <CustomInput name="city" 
                            label="City"
                            onChange={(event)=>handleChange(index,event)} 
                            defaultValue={item?.city}/>
                        </div>
                        <div>
                            <CustomInput name="state"
                            label="State"
                            onChange={(event)=>handleChange(index,event)}
                            defaultValue={item?.state}
                             />
                        </div>
                        <div>
                            <CustomInput type="date"
                            label="Start Date"
                            name="startDate" 
                            onChange={(event)=>handleChange(index,event)} 
                            defaultValue={item?.startDate}/>
                        </div>
                        <div>
                            <CustomInput type="date" name="endDate"
                            label="End Date"
                            onChange={(event)=>handleChange(index,event)} 
                            defaultValue={item?.endDate}
                            />
                        </div>
                        <div className='col-span-2'>
                           {/* Work Summery  */}
                           <RichTextEditor
                           index={index}
                           defaultValue={item?.workSummary}
                           onRichTextEditorChange={(event)=>handleRichTextEditor(event,'workSummery',index)}  />
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className='flex justify-between'>
            <div className='flex gap-2'>
            <Button variant="outline" onClick={AddNewExperience} className="text-primary"> + Add More Experience</Button>
            <Button variant="outline" onClick={RemoveExperience} className="text-primary"> - Remove</Button>

            </div>
            <Button disabled={loading} onClick={()=>onSave()}>
            {loading?<LoaderCircle className='animate-spin' />:'Save'}    
            </Button>
        </div>
        </div>
    </div>
  )
}

export default Experience