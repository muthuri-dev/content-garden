import React from 'react';

type TParams = {
  params:{
    id:string,
  }
}

export default function Dynamic({params}:TParams) {
  return (
    <div>Dynamic Routings {params.id}</div>
  )
}