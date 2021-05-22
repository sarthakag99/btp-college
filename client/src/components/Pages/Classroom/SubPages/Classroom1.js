import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as styles from './styles.module.css'


const Classroom1 = () => {

    const [state, setState] = useState({
        title: '',
        body: '',
        posts: []
    });

    useEffect(() => {
        getBlogPost();
    }, []);

    const getBlogPost = () => {
        axios.get('/api')
            .then((response) => {
                const data = response.data;
                const reverseData = new Array;
                for (let i = data.length - 1; i >= 0; i--) {
                    reverseData.push(data[i]);
                }

                setState((previousData) => {
                    return {
                        ...previousData,
                        posts: reverseData
                    };
                });

                console.log('Data has been recieved!!');
            })
            .catch(() => {
                alert('Error retrieving data!!');
            });;

    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setState((prevData) => {
            return {
                ...prevData,
                [name]: value
            };
        });
    }

    const submit = (event) => {
        event.preventDefault();

        const payload = {
            title: state.title,
            body: state.body
        };

        axios({
            url: '/api/save',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log('Data has been sent to the server');
                resetUserInputs();
                getBlogPost();
            })
            .catch(() => {
                console.log('Internal server error');
            });;
    };

    const resetUserInputs = () => {
        setState((previousDataEntry) => {
            return {
                ...previousDataEntry,
                title: '',
                body: ''
            };
        });
    };
    function convert(dateToUpdate){
        let current_datetime = new Date(dateToUpdate)
        let formatted_date=current_datetime.toDateString()
        return formatted_date;
      }
    const displayBlogPost = (posts) => {
        if (!posts.length) return null;

        return posts.map((post, index) => (
            <div key={index} className={styles['blog-post-display']}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <br></br>
                <p>{convert(post.date)}</p>
            </div>
        ));
    };


    console.log(state);



    return (
        <div className={styles.app}>
            <h2>welcome folks!! This is clone for classroom</h2>
            <form className={styles.form} onSubmit={submit}>
                <div className={styles['form-input']}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={state.title}
                        onChange={handleChange} />
                </div>
                <div className={styles['form-input']}>
                    <textarea
                        placeholder="Body"
                        name="body"
                        col="30"
                        rows="10"
                        value={state.body}
                        onChange={handleChange} />
                </div>
                <button className={styles.btn}>Submit</button>
                <div className="blog-post">
                    {displayBlogPost(state.posts)}
                </div>
            </form>
        </div>
    );

}
export default Classroom1