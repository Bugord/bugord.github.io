"use client"

import React, { useEffect } from 'react'
import { Game } from '../interfaces/game'
import { Unity, useUnityContext } from 'react-unity-webgl'
import { UnityInstance } from 'react-unity-webgl/declarations/unity-instance';

var unityInstance : UnityInstance;

export default function UnityGamePlayer({ game, }: { game: Game }) {
    const dataPath = `/data/games/${game.id}/build`

    const { unityProvider, isLoaded, UNSAFE__unityInstance, UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate } = useUnityContext({
        loaderUrl: `${dataPath}/${game.loaderUrl}`,
        dataUrl: `${dataPath}/${game.dataUrl}`,
        frameworkUrl: `${dataPath}/${game.frameworkUrl}`,
        codeUrl: `${dataPath}/${game.codeUrl}`,
    });

    useEffect(() => {
        if (UNSAFE__unityInstance) {
            unityInstance = UNSAFE__unityInstance
        }
    }, [UNSAFE__unityInstance])

 
    useEffect(() => {
        return () => {
            if(unityInstance){
                unityInstance.Quit();
            }
        }
    })

    return (
        <div>
            <div>{isLoaded ? 'loaded' : 'not loaded'}</div>
            <h2 className="text-lg font-semibold mt-4">Play</h2>
            <Unity unityProvider={unityProvider} id='unity-canvas' className='w-full h-full'/>
        </div>
    )
}