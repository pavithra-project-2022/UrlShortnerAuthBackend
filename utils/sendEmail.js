const nodemailer = require("nodemailer");
module.exports = async (email, subject, text) => {

	try {
		const transporter = nodemailer.createTransport({
			// host: process.env.HOST,
			service: "gmail",
			// port: Number(process.env.EMAIL_PORT),
			// secure: Boolean(process.env.SECURE),
			auth: {
				user: "urlshortnerdemo22@gmail.com",
				pass: "oknjobcwvqzdrtpx",
			},
		});
    let details = {
      from:"urlshortnerdemo22@gmail.com",
      to:email,
      subject: subject,
      text:text,
        // html: `
        //     <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
        //     <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to the Url Shortner App.</h2>
        //     <p>Congratulations! You're almost set to start using Url Shortner App.
        //         Just click the button below to validate your email address.
        //     </p>
            
        //     ${text}
        
        //     <p>If the button doesn't work for any reason, you can also click on the link below:</p>
        
        //     <div>${url}</div>
        //     </div>
        // `
    }
    await transporter.sendMail(details,(err)=>{
      if(err){
        console.log("email not sent")
      }else{
        console.log("email has sent")
      }
    })

		// await transporter.sendMail({
		// 	from: process.env.USER,
		// 	to: email,
		// 	subject: subject,
		// 	text: text,
		// });
		// console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};