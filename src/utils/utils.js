
export function validateForm(fields) {
    let errors = {};

    //Link
    if(!fields["link"]){
       errors["link"] = "Link bài hát là bắt buộc!";
    }

    if(typeof fields["link"] !== "undefined"){
       if(!fields["link"].match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)){
          errors["link"] = "Hãy nhập link là một url!";
       }
    }

    //nameSing
    if(!fields["nameSing"]){
       errors["nameSing"] = "Hãy nhập tên bài hát!";
    }

    //message
    if(!fields["message"]){
        errors["message"] = "Hãy nhập lời nhắn!";
    }

    return errors;
}
