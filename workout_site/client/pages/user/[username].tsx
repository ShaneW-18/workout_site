import React, { useState } from 'react';
import {GET_USERDATA_BY_USERNAME} from '../../GraphQL/Queries.js'
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import {useRouter } from 'next/router.js';
import Content from "../../components/Content";
import { exercises as e, workouts as w, tracks as t, schedules as s } from '../../sample/data';
import FollowBtn from '../../components/FollowBtn';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { AiOutlineOrderedList, AiOutlineCalendar } from 'react-icons/ai';
import LinkBox from '../../components/LinkBox';

export default function User({userData}: any){
    const router = useRouter();
    const { username } = router.query;
    const profileImage = userData.image ?? 'https://api.tecesports.com/images/general/user.png';
    const description = userData.description ?? 'GymSocial user';

    const schedules = userData.schedules || s;
    const tracks = userData.tracks || t;
    const workouts = userData.workouts || w;

    return (
        <Content>
            <div className='h-[100vh] bg-dg-100 flex items-center justify-center'>
                <div className='xs:h-full xs:w-full rounded-md bg-dg-100 '>
                    <div className='w-full h-full relative'>
                        <div className='gym-bg no-h px-8 py-4'>
                            <div className='flex items-center gap-6'>
                                <div className='profile-image bg-dg-100 rounded-full' style={{backgroundImage: `url(${profileImage})`}}></div>
                                <div>
                                    <h3 className='text-2xl font-bold'>{username}</h3>
                                    <p className='text-white/70'>{description}</p>
                                </div>
                                <div className='ml-auto'>
                                    <FollowBtn userId='1' targetUser='3' />
                                </div>
                            </div>
                        </div>
                        <div className='gap-2 grid grid-cols-1 md:grid-cols-3 px-8 py-4'>
                            <div className='border border-dg-400 rounded-md px-4 py-2'>
                                <div className='flex items-center gap-2'>
                                    <span>Schedules</span>
                                    <AiOutlineCalendar className='ml-auto' />
                                </div>
                                {schedules === undefined ? (
                                    <span className='text-white/60 font-medium'>No schedules!</span>
                                ) : (
                                    <div className='flex flex-col gap-2 mt-2'>
                                        {schedules.map(e => {
                                            return (
                                                <LinkBox title={e.name} desc={e.description} href={`/schedule/${e.scheduleId}`} key={`s-${e.scheduleId}`} />
                                            )
                                        })}
                                    </div>
                                )}
                            </div>
                            <div className='border border-dg-400 rounded-md px-4 py-2'>
                                <div className='flex items-center gap-2'>
                                    <span>Tracks</span>
                                    <AiOutlineOrderedList className='ml-auto' />
                                </div>
                                {tracks === undefined ? (
                                    <span className='text-white/60 font-medium'>No tracks!</span>
                                ) : (
                                    <div className='flex flex-col gap-2 mt-2'>
                                        {tracks.map(e => {
                                            return (
                                                <LinkBox title={e.name} desc={e.description} href={`/track/${e.trackId}`} key={`t-${e.trackId}`} />
                                            )
                                        })}
                                    </div>
                                )}
                            </div>
                            <div className='border border-dg-400 rounded-md px-4 py-2'>
                                <div className='flex items-center gap-2'>
                                    <span>Workouts</span>
                                    <GiWeightLiftingUp className='ml-auto' />
                                </div>
                                {workouts === undefined ? (
                                    <span className='text-white/60 font-medium'>No workouts!</span>
                                ) : (
                                    <div className='flex flex-col gap-2 mt-2'>
                                        {workouts.map(e => {
                                            if (!e.isRestDay){
                                                return (
                                                    <LinkBox title={e.name} desc={e.description} href={`/workout/${e.workoutId}`} key={`w-${e.workoutId}`} />
                                                )
                                            }
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export async function getServerSideProps(context: any) {
    const { username } = context.query;

    let userData = {};

    const client = new ApolloClient({
        link: createHttpLink({
          uri: "https://workout-dev.swiles.tech",
        }),
        cache: new InMemoryCache(),
    });

    try {
        const { data } = await client.query({
            query: GET_USERDATA_BY_USERNAME,
            variables:{username: username}
        });
        userData = data.get_user_username;
    }
    catch(e){
        console.error(e);
    }

    return {
        props: {
            userData: userData
        }
    }

}