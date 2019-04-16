import React, { Component } from 'react'

class FormMovie extends Component {

    state = {
        name: '',
        poster: '',
        comment: '',
    }

    handleChange = (e) => {
        
        this.setState({[e.target.name]: e.target.value});
    }


    submitForm = (e) => {
        e.preventDefault()
       
        const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
           };
          
           const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";
          
          
          
           fetch(url, config)
           .then(res => res.json())
            .then(res => {
              if (res.error) {
                alert(res.error);
              } else {
                alert(`film ajouté avec l'ID ${res}!`);
              }
            }).catch(e => {
              console.error(e);
              alert('Erreur lors de l\'ajout d\'un film');
            });
    }

    
    render() {
        return (
            <div className="FormEmployee">
                <h1>Saisie d'un film</h1>

                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Informations</legend>
                        <div className="form-data">
                            <label htmlFor="name">movie name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onChange={this.handleChange}
                                value={this.state.movieName}
                            />
                        </div>
 
                         <div className="form-data">
                             <label htmlFor="poster">url poster</label>
                             <input
                                 type="text"
                                 id="poster"
                                 name="poster"
                                 onChange={this.handleChange}
                                 value={this.state.movieposter}
                             />
                         </div>
                         <div className="form-data">
                             <label htmlFor="comment">comment</label>
                             <input
                                 type="textarea"
                                 id="comment"
                                 name="comment"
                                 onChange={this.handleChange}
                                 value={this.state.comment}
                             />
                         </div>
                         <hr />
                        <div className="form-data">
                            <input type="submit" value="Envoyer" />
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default FormMovie