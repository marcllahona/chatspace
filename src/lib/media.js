export function disableTracks(tracks, kind) {
  tracks.forEach(track => {
    if (track.kind === kind) {
      track.disable();
    }
  });
}

export function enableTracks(tracks, kind) {
  tracks.forEach(track => {
    if (track.kind === kind) {
      track.enable();
    }
  });
}

export function attachTracks(tracks, container) {
  tracks.forEach(track => {
    container.appendChild(track.attach());
  });
}

export function attachParticipantTracks(participant, container) {
  const tracks = Array.from(participant.tracks.values());
  attachTracks(tracks, container);
}

export function detachTracks(tracks) {
  tracks.forEach(track => {
    track.detach().forEach(detachedElement => {
      detachedElement.remove();
    });
  });
}

export function detachParticipantTracks(participant) {
  const tracks = Array.from(participant.tracks.values());
  detachTracks(tracks);
}
