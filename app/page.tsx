"use client";

import Navbar from "@/components/navbar";
import { useState } from "react";

export default function Home() {
	
	const [loading, setLoading] = useState(false);
	const [isResOk, setIsResOk] = useState(true);
	const [errMessage, setErrMessage] = useState('Something went wrong');
	const [content, setContent] = useState('Hello! How may I assist you today?');
	async function handleSubmit(event: any) {
		event.preventDefault();
		setLoading(true);
		 
		const data ={
			model: process.env.NEXT_PUBLIC_MODEL,
    messages: [
      {
        role: process.env.NEXT_PUBLIC_ROLE,
        content: event.target.message.value
 
      }
    ]
  
		  }

		let response = await fetch("api/chat", {
			method: "POST",
			
			body: JSON.stringify(data),
		});
		
		if(!response.ok){
			let res=await response.json();
			if(res.error.message !=null){
			setErrMessage(res.error.message)}
			setIsResOk(response.ok)
		}
		if (response.ok) {
			let res=await response.json();
			console.log(`Message sent successfully ${res}`);
			

			
			setLoading(false);
			setContent(res.replace(/\n/g, "<br />"))
			
			event.target.message.value = "";
		}

		

	setLoading(false);

		
	
		
	}


	if(!isResOk) throw new Error(errMessage)


	return (
		

		
		<>
		<Navbar />
		
		<p  dangerouslySetInnerHTML={{__html:content}} className="text-white pt-32 font-mono pl-5 pr-5" />
	
		<form onSubmit={handleSubmit}className="absolute inset-x-0  pl-14 pr-14 bottom-0" >
		
		
			<div>
				
				<textarea
					rows={4}
					required
					
					name="message"
					className="w-full p-4 bg-gray-700 border border-gray-500 text-white"
				/>
			</div>
			<button
				type="submit"
				disabled={loading}
				className="px-4 py-2 w-40 bg-gray-700 disabled:bg-gray-400 disabled:text-gray-100 text-white font-medium mt-4 font-mono">
				Send 
			</button>
		</form>
		
		</>
		
	);
}

