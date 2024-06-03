import React from 'react';
import Link from 'next/link';

const StudentInfo = () => {
    return(
        <div>
        <h1>Hey, Its Kashish Gour</h1>
        <p>
            Link to my Git Hub Repository is {''}
        <Link href="https://github.com/happyapplesauce/cprg306-assignments-.git">
            here
        </Link>
        </p>
        </div>
    );
};
export default StudentInfo;