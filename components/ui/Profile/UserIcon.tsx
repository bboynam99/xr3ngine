import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import './style.scss'
import { uploadFile } from '../../../redux/video/service'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

interface profileProps {
  avatar:any
  uploadFile: typeof uploadFile
}

// const mapStateToProps = (state: any) => {
//   return {
//     auth: selectAuthState(state)
//   }
// }

const mapDispatchToProps = (dispatch: Dispatch) => ({
  uploadFile: bindActionCreators(uploadFile, dispatch)
})

const UserProfile: React.FC<profileProps> = (props) => {

    const [file,setFile] = React.useState({})
    const [fileUrl,setFileUrl] = React.useState('')
    const handleChange = (e:any) =>{
      let efile = e.target.files[0]
      let formData = new FormData()
      formData.append('file',efile,efile.type)
      formData.append('name',efile.name)
      
      let file = formData
      
       setFile(file)
       setFileUrl(efile)
      }

    const handleSubmit = async () => {
<<<<<<< HEAD
      await props.uploadFile(file)
=======
      let data = new FormData();
      data.append('file',file)
        data.append('name', 'User avatar')
      console.log(data,"datatata")
      await props.uploadFile(data)
>>>>>>> 64bbe88... Fixed avatar upload issues
    }
    return (
        <div className="uploadform">
        {props.avatar ? <img
          src={URL.createObjectURL(fileUrl)}
          className="rounded mx-auto d-block"
          width="200px"
          height="150px"
        />:<><label htmlFor="fileInput">
           
        {fileUrl ? <img
          src={URL.createObjectURL(fileUrl)}
          className="rounded mx-auto d-block"
          width="200px"
          height="150px"
        />: <AccountCircleIcon style={{fontSize:150}}/>}
        
      </label>
      <input
        id="fileInput"
        name="file"
        placeholder="Upload Product Image"
        type="file"
        className="signup__fileField"
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Upload Avatar
      </Button></> }
        
      </div>
    )
}

export default connect(null, mapDispatchToProps)(UserProfile);