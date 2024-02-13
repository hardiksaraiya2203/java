function displayTextbox()
{
    let val = document.getElementById('Category').value;
    if(val == "Applicant"){

        document.getElementById('Recruiter').style.display = "none"
        document.getElementById('Applicant').style.display = "block"
    }
    else
    {

        document.getElementById('Recruiter').style.display = "block"
        document.getElementById('Applicant').style.display = "none"
    }

}
