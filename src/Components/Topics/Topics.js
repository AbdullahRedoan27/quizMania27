import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topicsData = useLoaderData();
    const topics = topicsData.data
    return (
        <div className='lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 grid grid-cols-1 top-1/3 '>
            {
                topics.map(topic => <Topic
                    key={topic.id}
                    topic = {topic}
                ></Topic>)
            }
        </div>
    );
};

export default Topics;