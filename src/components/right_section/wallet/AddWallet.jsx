

const AddWallet = (props) => {
  return (
	  <form className="form-horizontal">
		  <fieldset>
			  
			  {/*!--Form Name --*/}
			  <legend>Add walle</legend>
			  
			  {/* <!-- Text input-->*/}
			  			  <div className="form-group">
				  <label className="col-md-4 control-label" form="w_name">w nam</label>
				  <div className="col-md-2">
					  <input id="w_name" name="w_name" type="text" placeholder="placeholder" className="form-control input-md" required=""></input>
				  
				  </div>
			  </div>
			  
			   {/*<!-- Text input--> */}
			  <div className="form-group">
				  <label className="col-md-4 control-label" form="BALANS">balans</label>
				  <div className="col-md-2">
					  <input id="BALANS" name="BALANS" type="text" placeholder="0.00" className="form-control input-md" required=""></input>
				  
				  </div>
			  </div>
			  
			   {/*<!-- Textarea --> */}
			  <div className="form-group">
				  <label className="col-md-4 control-label" form="textarea">text</label>
				  <div className="col-md-4">
					  <textarea className="form-control" id="textarea" name="textarea"></textarea>
				  </div>
			  </div>
			  
			   {/* <!-- Multiple Radios (inline) -->*/}
			  <div className="form-group">
				  <label className="col-md-4 control-label" form="CCY">CCY</label>
				  <div className="col-md-4">
					  <label className="radio-inline" form="CCY-0">
						  <input type="radio" name="CCY" id="CCY-0" value="UAN" checked="checked">
							  UAN</input>
					  </label>
					  <label className="radio-inline" form="CCY-1">
						  <input type="radio" name="CCY" id="CCY-1" value="USD">
							  USD</input>
					  </label>
				  </div>
			  </div>
			  
			  
			  {/*<!-- Button --> */}
			  <div className="form-group">
				  <label className="col-md-4 control-label" form="singlebutton"></label>
				  
				  <div className="col-md-4">
					  <button id="singlebutton" name="singlebutton" className="btn btn-primary">ADD</button>
				  </div>
			  </div>
		  
		  </fieldset>
	  </form>
  )
};
export  default AddWallet

