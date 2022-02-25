import React, {useState, useEffect} from 'react'

export default function Form() {
    const [allMemesImages, setAllMemesImages] = useState([])
    const [memeImage, setMemeImage] = useState({
        topText: "",
        bottomText: "",
        imageUrl: "",
    })

    useEffect(() => {
        console.log("effect")
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then((memesData) => {
                setAllMemesImages(memesData.data.memes)
                setMemeImage(prevData => {
                    return {
                        ...prevData,
                        imageUrl: memesData.data.memes[0].url
                    }
                })
            })
    }, [])

    function changeMeme(event) {
        event.preventDefault()
        let value = Math.floor(Math.random() * allMemesImages.length);
        setMemeImage(prevMeme => ({
            ...prevMeme,
            imageUrl: allMemesImages[value].url
        }));
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMemeImage(prevForm => {
            return {
                ...prevForm,
                [name]: value
            }
        })
    }

    return (
        <div className='form' >
            <form>
                <div className='input-container'>
                    <input
                        className='input1'
                        placeholder='Top text'
                        name='topText'
                        value={memeImage.topText}
                        onChange={handleChange}
                    />
                    <input
                        className='input2'
                        placeholder='Bottom text'
                        name='bottomText'
                        value={memeImage.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button
                    onClick={changeMeme}
                    className='submit'
                >
                    Get a new meme image 🖼
                </button>
            </form>
            <div className='meme-container'>
                <img className='meme' src={memeImage.imageUrl} alt="Meme" />
                <h2 className='top'>{ memeImage.topText }</h2>
                <h2 className='bottom'>{ memeImage.bottomText }</h2>
            </div>
        </div>
    )
}
