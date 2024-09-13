import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Home, Camera, RefreshCw, ClipboardList, MoreHorizontal } from 'lucide-react';

const Index = () => {
  const [selectedProject, setSelectedProject] = useState('');
  const [title, setTitle] = useState('');
  const [transcription, setTranscription] = useState('');
  const [shareOwner, setShareOwner] = useState(false);
  const [shareTeam, setShareTeam] = useState(false);
  const [shareMyself, setShareMyself] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      recognitionRef.current = new window.webkitSpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'nl-NL'; // Set language to Dutch

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

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-indigo-700 text-white p-4">
        <h1 className="text-xl font-bold text-center">Updates</h1>
      </header>

      <main className="flex-grow p-4 flex justify-center items-start">
        <div className="bg-white rounded-lg shadow p-4 space-y-4 max-w-md w-full">
          <div>
            <Select value={selectedProject} onValueChange={setSelectedProject}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Alle projecten" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle projecten</SelectItem>
                {/* Add more project options here */}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="title">Titel van de update</Label>
            <Input id="title" placeholder="Voer een titel in" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div>
            <Label>Spraakbericht</Label>
            <p className="text-sm text-gray-500">Beschrijf de voortgang, problemen en volgende stappen</p>
            <div className="flex space-x-2 mt-2">
              <Button variant="secondary" onClick={toggleRecording}>
                {isRecording ? 'Stop opname' : 'Neem op'}
              </Button>
              <Button variant="secondary">Afspelen</Button>
              <Button variant="secondary">Upload</Button>
            </div>
          </div>

          <div>
            <Label htmlFor="transcription">Transcriptie</Label>
            <Textarea 
              id="transcription" 
              placeholder="Transcriptie verschijnt hier..." 
              value={transcription} 
              onChange={(e) => setTranscription(e.target.value)}
              className="h-32"
            />
          </div>

          <div>
            <Label>Foto's</Label>
            <div className="flex space-x-2 mt-2">
              <Button variant="secondary">
                <Camera className="w-4 h-4 mr-2" />
                Maak foto's
              </Button>
              <Button variant="secondary">
                <RefreshCw className="w-4 h-4 mr-2" />
                Upload
              </Button>
            </div>
          </div>

          <div>
            <Label>Delen met</Label>
            <div className="space-y-2">
              <div className="flex items-center">
                <Checkbox id="owner" checked={shareOwner} onCheckedChange={setShareOwner} />
                <label htmlFor="owner" className="ml-2">Eigenaar</label>
              </div>
              <div className="flex items-center">
                <Checkbox id="team" checked={shareTeam} onCheckedChange={setShareTeam} />
                <label htmlFor="team" className="ml-2">Interne team</label>
              </div>
              <div className="flex items-center">
                <Checkbox id="myself" checked={shareMyself} onCheckedChange={setShareMyself} />
                <label htmlFor="myself" className="ml-2">Mijzelf</label>
              </div>
            </div>
          </div>

          <Button className="w-full" onClick={handleMakeUpdate}>Maak update</Button>
        </div>
      </main>

      <footer className="bg-white border-t">
        <nav className="flex justify-around p-2">
          <Button variant="ghost" className="flex flex-col items-center">
            <Home className="w-12 h-12" />
            <span className="text-xs">Home</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center">
            <Camera className="w-12 h-12" />
            <span className="text-xs">Opname</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center">
            <RefreshCw className="w-12 h-12" />
            <span className="text-xs">Update</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center">
            <ClipboardList className="w-12 h-12" />
            <span className="text-xs">Inspectie</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center">
            <MoreHorizontal className="w-12 h-12" />
            <span className="text-xs">Meer</span>
          </Button>
        </nav>
      </footer>
    </div>
  );
};

export default Index;