import React from 'react';
import classes from './teams.module.css';
import Link from 'next/link';

const Teams = () => {
  return (
    <div className="w-full mt-6 flex flex-col flex-wrap justify-between items-center">
      <h1 className={classes.title}>
        OUR <span>ALUMNI</span>
      </h1>
      <div className="flex gap-2">
        <div className="">
          <Link href="/team/2k23">
            <button className={classes.btn}>
              <span className={classes.span}>2k23</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </Link>
        </div>
        <div className="">
          <Link href="/team/2k24">
            <button className={classes.btn}>
              <span className={classes.span}>2k24</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Teams;
