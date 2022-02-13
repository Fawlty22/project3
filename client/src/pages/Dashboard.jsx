import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import { QUERY_EMPLOYEE } from '../graphql/queries';
import { StoreProvider } from '../utils/GlobalContext';

const Dashboard = () => {
  
  let employee = Auth.getProfile();
  console.log(employee)

  // redirect to login if error in a query, not defined yet
  if (!employee) {
    return <Redirect to={"/login"} />
  }

  return (
    <div>
      {employee ?
        <div>
          <button>
            <Link to="/contract">Create Contract</Link>
          </button>
        </div>
        :
        ''
      }
    </div>
    );
  };

export default Dashboard;
