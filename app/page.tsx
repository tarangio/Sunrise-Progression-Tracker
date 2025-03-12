"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import ItemTracker from "@/components/item-tracker"
import Image from "next/image"

export default function Home() {
  const [items, setItems] = useState({
    // Gift of Mastery
    giftOfExploration: { count: 0, required: 1 },
    bloodstoneShard: { count: 0, required: 1 },
    obsidianShard: { count: 0, required: 250 },
    giftOfBattle: { count: 0, required: 1 },

    // Gift of Fortune
    mysticClover: { count: 0, required: 77 },
    globOfEctoplasm: { count: 0, required: 250 },

    // Gift of Magic
    giftOfMagic: { count: 0, required: 1 },
    vialOfPowerfulBlood: { count: 0, required: 250 },
    powerfulVenomSac: { count: 0, required: 250 },
    elaborateTotem: { count: 0, required: 250 },
    pileOfCrystallineDust: { count: 0, required: 250 },

    // Gift of Might
    giftOfMight: { count: 0, required: 1 },
    viciousFang: { count: 0, required: 250 },
    armoredScale: { count: 0, required: 250 },
    viciousClaw: { count: 0, required: 250 },
    ancientBone: { count: 0, required: 250 },

    // Gift of Sunrise
    giftOfMetal: { count: 0, required: 1 },
    orichalcumIngot1: { count: 0, required: 250 },
    mithrilIngot: { count: 0, required: 250 },
    darksteelIngot: { count: 0, required: 250 },
    platinumIngot: { count: 0, required: 250 },

    giftOfLight: { count: 0, required: 1 },
    giftOfAscalon: { count: 0, required: 1 },
    orichalcumIngot2: { count: 0, required: 250 },
    curedHardenedLeather: { count: 0, required: 250 },
    chargedLodestone: { count: 0, required: 100 },

    icyRunestone: { count: 0, required: 100 },
    superiorSigilOfStrength: { count: 0, required: 1 },

    // Dawn Greatsword
    dawnGreatsword: { count: 0, required: 1 },
  })

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const savedItems = localStorage.getItem("sunriseGreatswordItems")
    if (savedItems) {
      setItems(JSON.parse(savedItems))
    }
  }, [])

  // Save data to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem("sunriseGreatswordItems", JSON.stringify(items))
  }, [items])

  const updateCount = (key: string, value: number) => {
    setItems((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        count: Math.max(0, value), // Ensure count doesn't go below 0
      },
    }))
  }

  // Calculate item progress
  const calculateItemProgress = (count: number, required: number) => {
    if (required === 0) return 100
    return Math.min((count / required) * 100, 100)
  }

  // Calculate progress percentages for each section
  const giftOfMasteryProgress =
    (calculateItemProgress(items.giftOfExploration.count, items.giftOfExploration.required) +
      calculateItemProgress(items.bloodstoneShard.count, items.bloodstoneShard.required) +
      calculateItemProgress(items.obsidianShard.count, items.obsidianShard.required) +
      calculateItemProgress(items.giftOfBattle.count, items.giftOfBattle.required)) /
    4

  const giftOfFortuneProgress =
    (calculateItemProgress(items.mysticClover.count, items.mysticClover.required) +
      calculateItemProgress(items.globOfEctoplasm.count, items.globOfEctoplasm.required) +
      calculateItemProgress(items.giftOfMagic.count, items.giftOfMagic.required) +
      calculateItemProgress(items.giftOfMight.count, items.giftOfMight.required)) /
    4

  const giftOfSunriseProgress =
    (calculateItemProgress(items.giftOfMetal.count, items.giftOfMetal.required) +
      calculateItemProgress(items.giftOfLight.count, items.giftOfLight.required) +
      calculateItemProgress(items.icyRunestone.count, items.icyRunestone.required) +
      calculateItemProgress(items.superiorSigilOfStrength.count, items.superiorSigilOfStrength.required)) /
    4

  const totalProgress =
    (giftOfMasteryProgress +
      giftOfFortuneProgress +
      giftOfSunriseProgress +
      calculateItemProgress(items.dawnGreatsword.count, items.dawnGreatsword.required)) /
    4

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <Card className="max-w-4xl mx-auto bg-gray-800 border-amber-500/20 shadow-lg shadow-amber-500/10 overflow-hidden">
        {/* Enhanced Header with Improved Aesthetics */}
        <div className="relative h-56 md:h-72 bg-gradient-to-b from-amber-900/70 via-amber-800/50 to-gray-900/95 overflow-hidden">
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.4),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.2),transparent_50%)]" />

          {/* Animated Light Rays */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(251,191,36,0.1)_25%,transparent_25%,transparent_50%,rgba(251,191,36,0.1)_50%,rgba(251,191,36,0.1)_75%,transparent_75%,transparent)] opacity-30 bg-[length:100px_100px] animate-[gradient-shift_8s_linear_infinite]" />

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

          {/* Sword Image with Enhanced Effects */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-full flex items-center justify-center">
            <div className="relative h-[150%] w-44 md:w-56 mr-4 md:mr-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.4),transparent_70%)] blur-xl" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sunrise_concept_art.jpg-17UyFHIYq5HyNs1SWSWRyKD3BZuczh.jpeg"
                alt="Sunrise Greatsword"
                fill
                className="object-contain object-right drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]"
                priority
              />
            </div>
          </div>

          {/* Enhanced Title Content */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 max-w-[60%] z-10">
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-100 via-yellow-300 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wide">
                Sunrise Greatsword
              </h1>
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-transparent blur-sm -z-10" />
            </div>

            <p className="text-sm md:text-base text-amber-200/90 mt-2 font-medium tracking-wider drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
              Legendary Weapon Tracker
            </p>

            {/* Progress Information with Enhanced Styling */}
            <div className="mt-6 bg-gray-900/40 p-3 rounded-lg border border-amber-500/20 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-amber-200 flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-amber-400 mr-2 animate-pulse"></span>
                  Total Progress
                </span>
                <span className="text-sm font-bold text-amber-200">{totalProgress.toFixed(1)}%</span>
              </div>
              <Progress
                value={totalProgress}
                className="h-2.5 bg-gray-800/70 w-full"
                indicatorclassname="bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-500 animate-pulse"
              />
            </div>
          </div>
        </div>

        <CardContent className="p-6 grid gap-8">
          {/* Gift of Mastery Section */}
          <section>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold text-amber-400">Gift of Mastery</h2>
              <span className="text-xs text-amber-300">{giftOfMasteryProgress.toFixed(1)}% Complete</span>
            </div>
            <Progress
              value={giftOfMasteryProgress}
              className="h-1.5 mb-4 bg-gray-700"
              indicatorclassname="bg-amber-500"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ItemTracker
                label="Gift of Exploration"
                count={items.giftOfExploration.count}
                required={items.giftOfExploration.required}
                onUpdate={(value) => updateCount("giftOfExploration", value)}
              />
              <ItemTracker
                label="Bloodstone Shard"
                count={items.bloodstoneShard.count}
                required={items.bloodstoneShard.required}
                onUpdate={(value) => updateCount("bloodstoneShard", value)}
              />
              <ItemTracker
                label="Obsidian Shard"
                count={items.obsidianShard.count}
                required={items.obsidianShard.required}
                onUpdate={(value) => updateCount("obsidianShard", value)}
              />
              <ItemTracker
                label="Gift of Battle"
                count={items.giftOfBattle.count}
                required={items.giftOfBattle.required}
                onUpdate={(value) => updateCount("giftOfBattle", value)}
              />
            </div>
          </section>

          {/* Gift of Fortune Section */}
          <section>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold text-amber-400">Gift of Fortune</h2>
              <span className="text-xs text-amber-300">{giftOfFortuneProgress.toFixed(1)}% Complete</span>
            </div>
            <Progress
              value={giftOfFortuneProgress}
              className="h-1.5 mb-4 bg-gray-700"
              indicatorclassname="bg-amber-500"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ItemTracker
                label="Mystic Clover"
                count={items.mysticClover.count}
                required={items.mysticClover.required}
                onUpdate={(value) => updateCount("mysticClover", value)}
              />
              <ItemTracker
                label="Glob of Ectoplasm"
                count={items.globOfEctoplasm.count}
                required={items.globOfEctoplasm.required}
                onUpdate={(value) => updateCount("globOfEctoplasm", value)}
              />

              <Card className="bg-gray-700/50 border-amber-500/10">
                <CardHeader className="p-3 pb-1">
                  <CardTitle className="text-sm font-medium text-amber-300">Gift of Magic</CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <ItemTracker
                    label="Gift of Magic"
                    count={items.giftOfMagic.count}
                    required={items.giftOfMagic.required}
                    onUpdate={(value) => updateCount("giftOfMagic", value)}
                    className="mb-2"
                  />
                  <div className="pl-4 border-l-2 border-amber-500/20 space-y-2">
                    <ItemTracker
                      label="Vial of Powerful Blood"
                      count={items.vialOfPowerfulBlood.count}
                      required={items.vialOfPowerfulBlood.required}
                      onUpdate={(value) => updateCount("vialOfPowerfulBlood", value)}
                      size="sm"
                    />
                    <ItemTracker
                      label="Powerful Venom Sac"
                      count={items.powerfulVenomSac.count}
                      required={items.powerfulVenomSac.required}
                      onUpdate={(value) => updateCount("powerfulVenomSac", value)}
                      size="sm"
                    />
                    <ItemTracker
                      label="Elaborate Totem"
                      count={items.elaborateTotem.count}
                      required={items.elaborateTotem.required}
                      onUpdate={(value) => updateCount("elaborateTotem", value)}
                      size="sm"
                    />
                    <ItemTracker
                      label="Pile of Crystalline Dust"
                      count={items.pileOfCrystallineDust.count}
                      required={items.pileOfCrystallineDust.required}
                      onUpdate={(value) => updateCount("pileOfCrystallineDust", value)}
                      size="sm"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-700/50 border-amber-500/10">
                <CardHeader className="p-3 pb-1">
                  <CardTitle className="text-sm font-medium text-amber-300">Gift of Might</CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <ItemTracker
                    label="Gift of Might"
                    count={items.giftOfMight.count}
                    required={items.giftOfMight.required}
                    onUpdate={(value) => updateCount("giftOfMight", value)}
                    className="mb-2"
                  />
                  <div className="pl-4 border-l-2 border-amber-500/20 space-y-2">
                    <ItemTracker
                      label="Vicious Fang"
                      count={items.viciousFang.count}
                      required={items.viciousFang.required}
                      onUpdate={(value) => updateCount("viciousFang", value)}
                      size="sm"
                    />
                    <ItemTracker
                      label="Armored Scale"
                      count={items.armoredScale.count}
                      required={items.armoredScale.required}
                      onUpdate={(value) => updateCount("armoredScale", value)}
                      size="sm"
                    />
                    <ItemTracker
                      label="Vicious Claw"
                      count={items.viciousClaw.count}
                      required={items.viciousClaw.required}
                      onUpdate={(value) => updateCount("viciousClaw", value)}
                      size="sm"
                    />
                    <ItemTracker
                      label="Ancient Bone"
                      count={items.ancientBone.count}
                      required={items.ancientBone.required}
                      onUpdate={(value) => updateCount("ancientBone", value)}
                      size="sm"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Gift of Sunrise Section */}
          <section>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold text-amber-400">Gift of Sunrise</h2>
              <span className="text-xs text-amber-300">{giftOfSunriseProgress.toFixed(1)}% Complete</span>
            </div>
            <Progress
              value={giftOfSunriseProgress}
              className="h-1.5 mb-4 bg-gray-700"
              indicatorclassname="bg-amber-500"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-gray-700/50 border-amber-500/10">
                <CardHeader className="p-3 pb-1">
                  <CardTitle className="text-sm font-medium text-amber-300">Gift of Metal</CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <ItemTracker
                    label="Gift of Metal"
                    count={items.giftOfMetal.count}
                    required={items.giftOfMetal.required}
                    onUpdate={(value) => updateCount("giftOfMetal", value)}
                    className="mb-2"
                  />
                  <div className="pl-4 border-l-2 border-amber-500/20 space-y-2">
                    <ItemTracker
                      label="Orichalcum Ingot"
                      count={items.orichalcumIngot1.count}
                      required={items.orichalcumIngot1.required}
                      onUpdate={(value) => updateCount("orichalcumIngot1", value)}
                      size="sm"
                    />
                    <ItemTracker
                      label="Mithril Ingot"
                      count={items.mithrilIngot.count}
                      required={items.mithrilIngot.required}
                      onUpdate={(value) => updateCount("mithrilIngot", value)}
                      size="sm"
                    />
                    <ItemTracker
                      label="Darksteel Ingot"
                      count={items.darksteelIngot.count}
                      required={items.darksteelIngot.required}
                      onUpdate={(value) => updateCount("darksteelIngot", value)}
                      size="sm"
                    />
                    <ItemTracker
                      label="Platinum Ingot"
                      count={items.platinumIngot.count}
                      required={items.platinumIngot.required}
                      onUpdate={(value) => updateCount("platinumIngot", value)}
                      size="sm"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-700/50 border-amber-500/10">
                <CardHeader className="p-3 pb-1">
                  <CardTitle className="text-sm font-medium text-amber-300">Gift of Light</CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <ItemTracker
                    label="Gift of Light"
                    count={items.giftOfLight.count}
                    required={items.giftOfLight.required}
                    onUpdate={(value) => updateCount("giftOfLight", value)}
                    className="mb-2"
                  />
                  <div className="pl-4 border-l-2 border-amber-500/20 space-y-2">
                    <ItemTracker
                      label="Gift of Ascalon"
                      count={items.giftOfAscalon.count}
                      required={items.giftOfAscalon.required}
                      onUpdate={(value) => updateCount("giftOfAscalon", value)}
                      size="sm"
                    />
                    <ItemTracker
                      label="Orichalcum Ingot"
                      count={items.orichalcumIngot2.count}
                      required={items.orichalcumIngot2.required}
                      onUpdate={(value) => updateCount("orichalcumIngot2", value)}
                      size="sm"
                    />
                    <ItemTracker
                      label="Cured Hardened Leather"
                      count={items.curedHardenedLeather.count}
                      required={items.curedHardenedLeather.required}
                      onUpdate={(value) => updateCount("curedHardenedLeather", value)}
                      size="sm"
                    />
                    <ItemTracker
                      label="Charged Lodestone"
                      count={items.chargedLodestone.count}
                      required={items.chargedLodestone.required}
                      onUpdate={(value) => updateCount("chargedLodestone", value)}
                      size="sm"
                    />
                  </div>
                </CardContent>
              </Card>

              <ItemTracker
                label="Icy Runestone"
                count={items.icyRunestone.count}
                required={items.icyRunestone.required}
                onUpdate={(value) => updateCount("icyRunestone", value)}
              />
              <ItemTracker
                label="Superior Sigil of Strength"
                count={items.superiorSigilOfStrength.count}
                required={items.superiorSigilOfStrength.required}
                onUpdate={(value) => updateCount("superiorSigilOfStrength", value)}
              />
            </div>
          </section>

          {/* Dawn Greatsword Section */}
          <section>
            <h2 className="text-xl font-semibold text-amber-400 mb-2">Dawn Greatsword</h2>
            <div className="grid grid-cols-1 gap-4">
              <ItemTracker
                label="Dawn Greatsword"
                count={items.dawnGreatsword.count}
                required={items.dawnGreatsword.required}
                onUpdate={(value) => updateCount("dawnGreatsword", value)}
                highlight={true}
              />
            </div>
          </section>
        </CardContent>
      </Card>
    </main>
  )
}

