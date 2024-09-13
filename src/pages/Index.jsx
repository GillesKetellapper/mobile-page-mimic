import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Home, Camera, RefreshCw, ClipboardList, MoreHorizontal } from 'lucide-react';
import { UpdateForm } from './components/UpdateForm';
import { Footer } from './components/Footer';

const Index = () => {
  const [selectedProject, setSelectedProject] = useState('');
  const [title, setTitle] = useState('');
  const [transcription, setTranscription] = useState('');
  const [shareOwner, setShareOwner] = useState(false);
  const [shareTeam, setShareTeam] = useState(false);
  const [shareMyself, setShareMyself] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [photos, setPhotos] = useState([]);
  const recognitionRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      recognitionRef.current = new window.webkitSpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'nl-NL';

      recognitionRef.current.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0].transcript)
          .join('');
        setTranscription(transcript);
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        setIsRecording(false);
      };

      recognitionRef.current.onend = () => {
        setIsRecording(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);

  const toggleRecording = () => {
    if (recognitionRef.current) {
      if (isRecording) {
        recognitionRef.current.stop();
        recognitionRef.current.onstop = () => {
          const audioBlob = new Blob([], { type: 'audio/wav' });
          setAudioBlob(audioBlob);
        };
      } else {
        setTranscription('');
        recognitionRef.current.start();
      }
      setIsRecording(!isRecording);
    } else {
      console.error('Speech recognition is not supported in this browser.');
    }
  };

  const handleMakeUpdate = () => {
    window.open('https://docs.google.com/document/d/1l6oekThZo5-pj6EgwKGM3Nv-Dzn3B3z6BquB10ZekPM/edit', '_blank');
  };

  const handleTakePhoto = () => {
    const mockPhoto = { id: Date.now(), url: 'https://via.placeholder.com/150' };
    setPhotos([...photos, mockPhoto]);
    alert('Photo taken! (This is a mock function)');
  };

  const handleUploadPhoto = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newPhoto = { id: Date.now(), url: e.target.result };
        setPhotos([...photos, newPhoto]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePlayAudio = () => {
    if (audioBlob) {
      const audio = new Audio(URL.createObjectURL(audioBlob));
      audio.play();
    } else {
      alert('No audio recording available to play.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-indigo-700 text-white p-4">
        <h1 className="text-xl font-bold text-center">Updates</h1>
      </header>

      <main className="flex-grow p-4 flex justify-center items-start">
        <UpdateForm
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          title={title}
          setTitle={setTitle}
          transcription={transcription}
          setTranscription={setTranscription}
          shareOwner={shareOwner}
          setShareOwner={setShareOwner}
          shareTeam={shareTeam}
          setShareTeam={setShareTeam}
          shareMyself={shareMyself}
          setShareMyself={setShareMyself}
          isRecording={isRecording}
          toggleRecording={toggleRecording}
          handlePlayAudio={handlePlayAudio}
          handleTakePhoto={handleTakePhoto}
          handleUploadPhoto={handleUploadPhoto}
          fileInputRef={fileInputRef}
          handleFileChange={handleFileChange}
          photos={photos}
          handleMakeUpdate={handleMakeUpdate}
        />
      </main>

      <Footer />
    </div>
  );
};

export default Index;