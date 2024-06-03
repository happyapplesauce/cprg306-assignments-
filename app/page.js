'use client';
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px'}}>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li>
          <a href= "/week-2" style={{ fontSize: '1.5rem', color: 'green'}}>Week 2 Assignment</a>
        </li>
        <li>
          <a href= "/week-3" style={{ fontSize: '1.5rem', color: 'green'}}>Week 3 Assignment</a>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;