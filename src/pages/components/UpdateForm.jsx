import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Camera, RefreshCw } from 'lucide-react';

export const UpdateForm = ({
  selectedProject,
  setSelectedProject,
  title,
  setTitle,
  transcription,
  setTranscription,
  shareOwner,
  setShareOwner,
  shareTeam,
  setShareTeam,
  shareMyself,
  setShareMyself,
  isRecording,
  toggleRecording,
  handlePlayAudio,
  handleTakePhoto,
  handleUploadPhoto,
  fileInputRef,
  handleFileChange,
  photos,
  handleMakeUpdate
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 space-y-4 max-w-md w-full">
      <div>
        <Select value={selectedProject} onValueChange={setSelectedProject}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Kies een project" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="prinsengracht264">Prinsengracht 264</SelectItem>
            <SelectItem value="keizersgracht30">Keizersgracht 30</SelectItem>
            <SelectItem value="maasoever40">Maasoever 40</SelectItem>
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
          <Button variant="secondary" onClick={handlePlayAudio}>Afspelen</Button>
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
          <Button variant="secondary" onClick={handleTakePhoto}>
            <Camera className="w-4 h-4 mr-2" />
            Maak foto's
          </Button>
          <Button variant="secondary" onClick={handleUploadPhoto}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Upload
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            style={{ display: 'none' }}
          />
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {photos.map((photo) => (
            <img key={photo.id} src={photo.url} alt="Uploaded" className="w-20 h-20 object-cover rounded" />
          ))}
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
  );
};