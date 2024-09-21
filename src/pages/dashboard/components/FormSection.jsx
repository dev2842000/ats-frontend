import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Home, LayoutGrid } from 'lucide-react';
import PersonalDetail from './forms/PersonalDetail';
import Summery from './forms/Summary';
// import Experience from './forms/Experience';
// import Education from './forms/Education';
// import Skills from './forms/Skills';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '@/CommonComponents/Button';

function FormSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(true);
  const router = useRouter();
  const { resumeId } = router.query; // Accessing the resumeId from the URL

  return (
    <div>
      <div className='flex justify-between items-center'>
      
        <div className='flex items-center gap-1'>
          <Button style='sm border-2 border-gray-400 hover:bg-gray-200 flex gap-2'><LayoutGrid/> Theme</Button>
          <Link href="/dashboard" className="flex border-2 border-gray-400 hover:bg-gray-200 px-3 py-2">
              <Home/>
          </Link>
        </div>
        <div className='flex gap-2'>
          {activeFormIndex > 1 && (
            <Button
              size="sm"
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              <ArrowLeft />
            </Button>
          )}
          <Button
            disabled={!enableNext}
            className="flex gap-2"
            size="sm"
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
          >
            <ArrowRight />
          </Button>
        </div>
      </div>

      {activeFormIndex == 1 ? (
        <PersonalDetail enabledNext={(v) => setEnableNext(v)} />
      ) : activeFormIndex == 2 ? (
        <Summery enabledNext={(v) => setEnableNext(v)} />
      ) : activeFormIndex == 3 ? (
        // <Experience />
        <></>
      ) : activeFormIndex == 4 ? (
        // <Education />
        <></>
      ) : activeFormIndex == 5 ? (
        // <Skills />
        <></>
      ) : activeFormIndex == 6 ? (
        <Link href={`/my-resume/${resumeId}/view`}></Link>
      ) : null}
    </div>
  );
}

export default FormSection;
