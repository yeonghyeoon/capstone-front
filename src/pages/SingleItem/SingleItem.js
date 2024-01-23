import React, { useEffect, useState, useRef } from 'react'
import './SingleItem.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, ButtonGroup, VStack, Textarea } from '@chakra-ui/react'
import { LoremIpsum } from 'react-lorem-ipsum';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

const SingleItem = () => {
    const { id } = useParams();
    const URL = process.env.REACT_APP_API_URL;
    console.log("Rendering SingleItem component")
    const [singleItem, setSingleItem] = useState({comments: []});
    const [quantity, setQuantity] = useState(1);
    const [newComment, setNewComment] = useState(false);
    const commentRef = useRef();

    const increase = () => {
        console.log("quantity increased")
        setQuantity(quantity+1);
    }
    const decrease = () => {
        console.log("quantity decreased")
        if (quantity >1) {
            setQuantity(quantity-1);
        }

    }

    const addCommentHandler = (e) => {
        e.preventDefault();

        const comment = commentRef.current.value
        // console.log(commentRef.current.value)
        if(!comment.trim()) {
            return;
        }

        const newComments = {
            comment
        }
        axios.post(`${URL}/products/${id}/comments`, newComments)
            .then((response) => {
                console.log(response.data)
                setSingleItem(prev => {
                    return {...prev, comments:[...prev.comments, response.data]};
                })

                // const newCommentData = response.data
                // const updatedSingleItem = {...singleItem}

                // updatedSingleItem.comments.push(newCommentData)
                // setSingleItem(updatedSingleItem)

                commentRef.current.value = '';
                setNewComment(true);

            })
            .catch((error) => {
                console.log(error)
            })
       
    }
    useEffect(() => {
            console.log("Id", id);
            const getData = async () => {
                try {
                    const response = await axios.get(`${URL}/products/${id}`)
                    const updatedSingleItem = {
                            ...response.data, comments: response.data.comments || []
                        }

                        setSingleItem(updatedSingleItem)
                        console.log(updatedSingleItem)

                        // setSingleItem(response.data)
                        // console.log(response.data)    
                } catch(error) {
                    console.log("Error",error)
                } finally {
                    setNewComment(false);
                }
            }
            
            getData();

        }, [id, newComment])

  return (
    <div className='singleItem'>
        <div className='singleItem-title'>{singleItem.name}</div>
        <div className='singleItem-imgContainer'>
            <img className='singleItem-img' src={singleItem.image} alt={singleItem.name}/>    
        </div>

        <div className='singleItem-reference'>
            <img className='singleItem-reference--img' src={singleItem.image} alt={singleItem.name} />
            <img className='singleItem-reference--img' src={singleItem.referenceImage} alt={singleItem.name} />
        </div>
        
        <div className='singleItem-info'>
            {/** 설명 Lorem ipsum... */}
            <div className='singleItem-info--text'>
                <LoremIpsum p={1} avgWordsPerSentence={3}/>    
            </div>
            <div className='singleItem-quantity'>
                <p>Quantity</p>
                <div className='singleItem-quantity--btn'>
                    <button onClick={decrease}>-</button>
                    <p>{quantity}</p>
                    <button onClick={increase}>+</button>    
                </div>
                <p className='singleItem-info--price'>${singleItem.price}</p>    
            </div>
        
            <div className='singleItem-info--btn'>
                <Button colorScheme='messenger' size='lg' className='singleItem-info--btn--add'>ADD TO CART</Button>
                <Button colorScheme='messenger' size='lg' className='singleItem-info--btn--buy'>BUY NOW</Button>    
            </div>
            
        </div>
        <div className='singleItem-info--detail'>
            <div className='singleItem-description'>
                <div className='singleItem-size'>{singleItem.size}</div>
                <div className='singleItem-weight'>{singleItem.weight}</div>
            </div>
        </div>

        <div className='singleItem-info--reviewContainer'>
            <h2>REVIEWS</h2>
            <VStack spacing={4} align="stretch" className='singleItem-info--reviews'>
                {singleItem.comments.map(comment => (
                    <div key={comment.id} className='singleItem-info--reviews--Detail'>
                        <span>{comment.comment || 'No comment data'}</span>
                        <div className='singleItem-info--reviews-icons'>
                            <EditIcon />
                            <DeleteIcon />    
                        </div>
                        
                    </div>
                ))}
            </VStack>

            <Textarea placeholder="Write your review here" ref={commentRef}></Textarea>
            <Button onClick={addCommentHandler}>Submit Review</Button>

        </div>    
    </div>
    

  )
}

export default SingleItem