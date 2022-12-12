import {
    useQuery,
  } from '@tanstack/react-query';

const Sample = () => {
    const { data, isLoading, error } = useQuery(['sample'], () => {
      return fetch('/api/test').then((res) =>
        res.json()
      );
    })
    if (isLoading) return <div>Loading...</div>;
    return <div>{JSON.stringify(data)}</div>;
  };


  export default Sample;