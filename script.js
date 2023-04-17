function validateForm()
{
    var first_name=document.getElementById("fname").value;
    var last_name=document.getElementById("lname").value;
    var S_no=document.getElementById("sno").value;
    var branch_name=document.getElementById("bname").value;

    if(first_name=="")
    {
       alert("First Name is required");
       return false;
    }
    if(last_name=="")
    {
       alert("Last Name is required");
       return false;
    }
    if(S_no=="")
    {
       alert("Scholar Number is required");
       return false;
    }
    if(branch_name=="")
    {
       alert("Branch Name is required");
       return false;
    }
    return true;
}
    function showData()
    {
        var list;
        if(localStorage.getItem("list")==null){
            list=[];
        }
        else{
            list=JSON.parse(localStorage.getItem("list"));
        }

        var html="";
        list.forEach(function(element,index){
            html+="<tr>";
            html+="<td>"+element.first_name+"</td>";
            html+="<td>"+element.last_name+"</td>";
            html+="<td>"+element.S_no+"</td>";
            html+="<td>"+element.branch_name+"</td>";
            html+='<td><button onclick="deleteData('+index+')" class="btn btn-danger">Delete</button><button onclick="updateData('+index+')" class="btn btn-warning m-2">Edit</button></td>';
            html+="</tr>";
        })
        document.querySelector("#crudTable tbody").innerHTML=html;
    }

document.onload=showData();
function AddData()
{
  if(validateForm()==true)
  {
    var first_name=document.getElementById("fname").value;
    var last_name=document.getElementById("lname").value;
    var S_no=document.getElementById("sno").value;
    var branch_name=document.getElementById("bname").value;

    var list;
        if(localStorage.getItem("list")==null){
            list=[];
        }
        else{
            list=JSON.parse(localStorage.getItem("list"));
       }

       list.push({
        first_name: first_name,
        last_name: last_name,
        S_no: S_no,
        branch_name:branch_name,
       });
       
       localStorage.setItem("list",JSON.stringify(list));
       showData();
       document.getElementById("fname").value="";
       document.getElementById("lname").value="";
       document.getElementById("sno").value="";
       document.getElementById("bname").value="";

    }
}
function deleteData(index){
    var list;
        if(localStorage.getItem("list")==null){
            list=[];
        }
        else{
            list=JSON.parse(localStorage.getItem("list"));
       }

       list.splice(index,1);
       localStorage.setItem("list",JSON.stringify(list));
       showData();
}

function updateData(index){
    document.getElementById("Submit").style.display="none";
    document.getElementById("Update").style.display="block";

    var list;
        if(localStorage.getItem("list")==null){
            list=[];
        }
        else{
            list=JSON.parse(localStorage.getItem("list"));
       }
       document.getElementById("fname").value=list[index].first_name;
       document.getElementById("lname").value=list[index].last_name;
       document.getElementById("sno").value=list[index].S_no;
       document.getElementById("bname").value=list[index].branch_name;
    
       document.querySelector("#Update").onclick=function(){
        if(validateForm()==true){
            list[index].first_name=document.getElementById("fname").value
            list[index].last_name=document.getElementById("lname").value
            list[index].S_no= document.getElementById("sno").value
            list[index].branch_name=document.getElementById("bname").value

            localStorage.setItem("list",JSON.stringify(list));
            showData();

            document.getElementById("fname").value="";
            document.getElementById("lname").value="";
            document.getElementById("sno").value="";
            document.getElementById("bname").value="";

            document.getElementById("Submit").style.display="block";
            document.getElementById("Update").style.display="none";
        }
       }
}
 