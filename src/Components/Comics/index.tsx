import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import Tilt from 'react-parallax-tilt'
import Generic from '/public/img/marvelcomic.jpg'
import ReactLoading from 'react-loading'
import {
    AiFillGithub,
    AiFillLinkedin,
    AiOutlineInstagram,
} from 'react-icons/ai'

export interface ResponseData {
    id: number
    title: string
    description: string
    thumbnail: {
        path: string
        extension: string
    }
}

const Comics: React.FC = () => {
    const [comics, setComics] = useState<ResponseData[]>([])
    const [loading, setLoading] = useState(false)

    const getData = async () => {
        try {
            setLoading(true)
            const response = await api.get('/comics?limit=100&offset=0')
            setComics(response.data.data.results)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    if (loading) {
        return (
            <div className="grid place-items-center p-6">
                <ReactLoading color="black" type="spin" />
            </div>
        )
    }
    return (
        <>
            <div className="inline-flex mt-6 gap-10">
                <a href="https://github.com/samluiz" className=" w-fit">
                    <AiFillGithub className=" duration-200 hover:text-gray-700 w-20 h-20" />
                </a>
                <a
                    href="https://www.linkedin.com/in/samuelluizrl"
                    className=" w-fit"
                >
                    <AiFillLinkedin className=" duration-200 hover:text-gray-700 w-20 h-20" />
                </a>
                <a href="https://www.instagram.com/7samuca7" className=" w-fit">
                    <AiOutlineInstagram className=" duration-200 hover:text-gray-700 w-20 h-20" />
                </a>
            </div>
            <ul className=" flex justify-around items-center flex-row flex-wrap p-4 m-6 ">
                {comics
                    .sort(() => 0.5 - Math.random())
                    .map((comic) => {
                        let path = comic.thumbnail.path
                        let extension = comic.thumbnail.extension

                        return (
                            <>
                                <div key={comic.id}>
                                    <li>
                                        <div className=" grid place-items-center gap-4 w-[288px] overflow-visible p-6">
                                            <Tilt>
                                                <img
                                                    src={`${
                                                        comic.thumbnail.path ==
                                                        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
                                                            ? Generic
                                                            : path +
                                                              '.' +
                                                              extension
                                                    }`}
                                                    alt="Thumbnail"
                                                    className=" cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 duration-150 rounded max-w-sm max-h-72 -z-50"
                                                />
                                            </Tilt>

                                            <h1 className=" max-w-[270px] text-ellipsis overflow-hidden whitespace-nowrap">
                                                {comic.title}
                                            </h1>
                                            <p className=" max-w-[270px] text-ellipsis overflow-hidden whitespace-nowrap">
                                                {comic.description}
                                            </p>
                                        </div>
                                    </li>
                                </div>
                            </>
                        )
                    })}
            </ul>
        </>
    )
}

export default Comics
