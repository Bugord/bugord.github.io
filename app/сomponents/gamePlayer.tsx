"use client"

import React from 'react'
import { Game } from '../interfaces/game'
import { Unity, useUnityContext } from 'react-unity-webgl'

const GamePlayer : React.FC<{ game: Game }> = ({ game }) => {
    const { unityProvider } = useUnityContext({
        loaderUrl: `/data/${game.id}/${game.loaderUrl}`,
        dataUrl: `/data/${game.id}/${game.dataUrl}`,
        frameworkUrl: `/data/${game.id}/${game.frameworkUrl}`,
        codeUrl: `/data/${game.id}/${game.codeUrl}`,
    });

    return (
        <div>
            <h2 className="text-lg font-semibold mt-4">Играть</h2>
            <Unity 
                unityProvider={unityProvider}
                tabIndex={1}
                style={{ width: 800, height: 600 }}
        />
        </div>
    )
}

export default GamePlayer