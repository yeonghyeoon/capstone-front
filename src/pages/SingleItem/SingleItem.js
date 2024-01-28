import React, { useEffect, useState, useRef } from 'react'
import './SingleItem.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, ButtonGroup, VStack, Textarea } from '@chakra-ui/react'
import { LoremIpsum } from 'react-lorem-ipsum';
// import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import DeleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import EditIcon from '../../assets/Icons/edit-24px.svg';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/cartReducer';

const SingleItem = () => {
    const { id } = useParams();
    const URL = process.env.REACT_APP_API_URL;
    console.log("Rendering SingleItem component")
    const [singleItem, setSingleItem] = useState({comments: []});
    const [quantity, setQuantity] = useState(1);
    const [newComment, setNewComment] = useState(false);
    const [mainImage, setMainImage] = useState(''); 
    const commentRef = useRef();
    const dispatch = useDispatch();

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
                commentRef.current.value = '';
                setNewComment(true);

            })
            .catch((error) => {
                console.log(error)
            })
        }
    const editCommentHandler = (commentId) => {
        axios.patch(`${URL}/products/${id}/comments/${commentId}`, {comment: 'updated comment'})
            .then((response) => {
                console.log(response.data)
                setSingleItem(prev => {
                    const editedComments = prev.comments.map(comment => {
                        if(comment.id === commentId) {
                            return {...comment, comment:"response.data"}
                        }
                        return comment;
                        })
                    return {...prev, comments: editedComments};
                    
                })
            })
            .catch((error) => {
                console.log("error")
            })
    }
    const removeCommentHandler = (commentId) => {
        axios.delete(`${URL}/products/${id}/comments/${commentId}`)
            .then((response) => {
                console.log(response.data)
                setSingleItem(prev => {
                    const deletedComments = prev.comments.filter(comment => comment.id !== commentId);
                    return {...prev, comments: deletedComments};
                })
            })
            .catch((error) => {
                console.log("error")
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
                        setMainImage(updatedSingleItem.image)  
                } catch(error) {
                    console.log("Error",error)
                } finally {
                    setNewComment(false);
                }
            }
            getData();
        }, [id, newComment])

    const imageChangeHandler = (image) => {
            console.log("changing image to", image);
            setMainImage(image);
        }

  return (
    <div className='singleItem'>
        <div className='singleItem-title'>{singleItem.name}</div>
        <div className='singleItem-imgContainer'>
            <img className='singleItem-img' src={mainImage} alt={singleItem.name} onMouseOver={() => imageChangeHandler(singleItem.image)} />    
        </div>

        <div className='singleItem-reference'>
            <img className='singleItem-reference--img' src={singleItem.image} alt={singleItem.name} onMouseOver={() => imageChangeHandler(singleItem.image)} />
            <img className='singleItem-reference--img' src={singleItem.referenceImage} alt={singleItem.name} onMouseOver={() => imageChangeHandler(singleItem.referenceImage)} />
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
                <Button colorScheme='messenger' size='lg' className='singleItem-info--btn--add' onClick={() => dispatch(addToCart({
                    id: singleItem.id,
                    name: singleItem.name,
                    price: singleItem.price,
                    img: singleItem.image,
                    quantity,
                }))}>ADD TO CART</Button>
                <Button colorScheme='messenger' size='lg' className='singleItem-info--btn--buy'>BUY NOW</Button>    
            </div>
            
        </div>
        <div className='singleItem-info--detail'>
            <div className='singleItem-description'>
                <div className='singleItem-size'>size: {singleItem.size}</div>
                <div className='singleItem-weight'>weight: {singleItem.weight}</div>
            </div>
        </div>

        <div className='singleItem-info--reviewContainer'>
            <h2>REVIEWS</h2>
            <VStack spacing={4} align="stretch" className='singleItem-info--reviews'>
                {singleItem.comments.map(comment => (
                    <div key={comment.id} className='singleItem-info--reviews--Detail'>
                        <span>{comment.comment || 'No comment data'}</span>
                        <div className='singleItem-info--reviews-icons'>
                            {/* <EditIcon /> */}
                            {/* <DeleteIcon /> */}
                            <img src={DeleteIcon} alt='delete-icon' onClick={() => removeCommentHandler(comment.id)} />
                            <img src={EditIcon} alt='edit-icon' onClick={() => editCommentHandler(comment.id)} />
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