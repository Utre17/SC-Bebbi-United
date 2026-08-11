(() => {
        function refreshLucideIcons(attempts = 50) {
            if (window.lucide && typeof window.lucide.createIcons === 'function') {
                window.lucide.createIcons();
                return;
            }

            if (attempts > 0) {
                window.setTimeout(() => refreshLucideIcons(attempts - 1), 100);
            }
        }

        refreshLucideIcons();
        document.getElementById('year').textContent = new Date().getFullYear();

        function setMenuOpen(isOpen) {
            const menu = document.getElementById('mobile-menu');
            if (!menu) return;

            menu.classList.toggle('hidden', !isOpen);
            menu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
            document.body.classList.toggle('menu-open', isOpen);
        }

        function toggleMenu(forceState) {
            const menu = document.getElementById('mobile-menu');
            if (!menu) return;

            const nextState = typeof forceState === 'boolean'
                ? forceState
                : menu.classList.contains('hidden');
            setMenuOpen(nextState);
        }

        window.toggleMenu = toggleMenu;

        function initContactForm() {
            const form = document.getElementById('contact-form');
            if (!form) return;

            const statusEl = document.getElementById('contact-status');
            const submitBtn = document.getElementById('contact-submit');

            form.addEventListener('submit', async (event) => {
                event.preventDefault();
                if (!statusEl || !submitBtn) return;

                statusEl.classList.add('hidden');
                statusEl.textContent = '';

                submitBtn.disabled = true;
                submitBtn.classList.add('opacity-70', 'cursor-not-allowed');

                try {
                    const formData = new FormData(form);
                    const response = await fetch(form.action, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            Accept: 'application/json'
                        }
                    });

                    if (response.ok) {
                        form.reset();
                        statusEl.textContent = 'Danke! Deine Nachricht wurde erfolgreich gesendet.';
                        statusEl.className =
                            'rounded-lg border border-bebbi-neon/40 bg-bebbi-neon/10 text-bebbi-neon px-4 py-3 text-sm';
                    } else {
                        statusEl.textContent =
                            'Leider hat das Senden nicht geklappt. Bitte versuche es später erneut.';
                        statusEl.className =
                            'rounded-lg border border-red-500/40 bg-red-500/10 text-red-200 px-4 py-3 text-sm';
                    }
                } catch (error) {
                    statusEl.textContent =
                        'Netzwerkfehler. Bitte prüfe deine Verbindung und versuche es erneut.';
                    statusEl.className =
                        'rounded-lg border border-red-500/40 bg-red-500/10 text-red-200 px-4 py-3 text-sm';
                } finally {
                    statusEl.classList.remove('hidden');
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('opacity-70', 'cursor-not-allowed');
                }
            });
        }

        // --- MATCHCENTER DATA & RENDERING ---
        const clubName = 'SC Bebbi United';
        const clubLogoSrc = 'assets/images/logo.png';

        const teamLogos = {
            'FC Reinach': 'assets/images/teams/fc-reinach.png',
            'FC Frenkendorf': 'assets/images/teams/fc-frenkendorf.png',
            'FC Frenkendorf blau': 'assets/images/teams/fc-frenkendorf.png',
            'FC Gelterkinden': 'assets/images/teams/fc-gelterkinden.png',
            'FC Liestal': 'assets/images/teams/fc-liestal.png',
            'FC Concordia Basel a': 'assets/images/teams/fc-concordia-basel.png',
            'FC Concordia Basel b': 'assets/images/teams/fc-concordia-basel.png',
            'FC Therwil FF-17': 'assets/images/teams/fc-therwil-ff-17.png',
            'FC Therwil FF-14/9': 'assets/images/teams/fc-therwil-ff-17.png',
            'FC Arlesheim': 'assets/images/teams/fc-arlesheim.png',
            'FC Telegraph BS': 'assets/images/teams/fc-telegraph-bs.png',
            'FC Telegraph BS weiss': 'assets/images/teams/fc-telegraph-bs.png',
            'FC Telegraph BS (9v9)': 'assets/images/teams/fc-telegraph-bs.png',
            'FC Telegraph BS 3': 'assets/images/teams/fc-telegraph-bs.png',
            'FC Nordstern BS': 'assets/images/teams/fc-nordstern-bs.png',
            'FC Nordstern BS FF17 b': 'assets/images/teams/fc-nordstern-bs.png',
            'FC Nordstern BS schwarz': 'assets/images/teams/fc-nordstern-bs.png',
            'FC Breitenbach': 'assets/images/teams/fc-breitenbach.png',
            'FC Breitenbach rot': 'assets/images/teams/fc-breitenbach.png',
            'FC Biel-Benken D1': 'assets/images/teams/fc-biel-benken.png',
            'FC Black Stars D2': 'assets/images/teams/fc-black-stars.png',
            'FC Ettingen': 'assets/images/teams/fc-ettingen.png',
            'FC Ettingen rot': 'assets/images/teams/fc-ettingen.png',
            'FC Laufen D14 schwarz': 'assets/images/teams/fc-laufen.png',
            'FC Oberwil rot': 'assets/images/teams/fc-oberwil.png',
            'SV Muttenz': 'assets/images/teams/sv-muttenz.png',
            'US Olympia 1963': 'assets/images/teams/us-olympia-1963.png',
            'BSC Old Boys a': 'assets/images/teams/bsc-old-boys.png',
            'BSC Old Boys b': 'assets/images/teams/bsc-old-boys.png',
            'SC Steinen Basel': 'assets/images/teams/sc-steinen-basel.png',
            'SC Binningen gold': 'assets/images/teams/sc-binningen.png',
            'FC Oberwil': 'assets/images/teams/fc-oberwil.png'
        };

        const matchesFF17 = [
            { dateIso: '2026-08-19', time: '19:30', homeTeam: clubName, awayTeam: 'FC Gelterkinden', location: 'Rankhof, Basel', competition: 'Cup', competitionLabel: 'Juniorinnen FF-17 Cup / Runde 1' },
            { dateIso: '2026-08-22', time: '15:00', homeTeam: clubName, awayTeam: 'FC Lausen 72', location: 'Rankhof, Basel' },
            { dateIso: '2026-08-30', time: '11:00', homeTeam: 'FC Reinach', awayTeam: clubName, location: 'Fiechten, Reinach' },
            { dateIso: '2026-09-05', time: '', homeTeam: clubName, awayTeam: 'BSC Old Boys b', location: 'Rankhof, Basel' },
            { dateIso: '2026-09-12', time: '', homeTeam: 'FC Nordstern BS FF17 b', awayTeam: clubName, location: 'Rankhof, Basel' },
            { dateIso: '2026-09-19', time: '', homeTeam: clubName, awayTeam: 'SV Muttenz', location: 'Rankhof, Basel' },
            { dateIso: '2026-09-27', time: '11:00', homeTeam: 'FC Liestal', awayTeam: clubName, location: 'Stadion Gitterli, Liestal' },
            { dateIso: '2026-10-10', time: '', homeTeam: clubName, awayTeam: 'FC Concordia Basel b', location: 'Rankhof, Basel' },
            { dateIso: '2026-10-17', time: '16:30', homeTeam: 'FC Therwil FF-17', awayTeam: clubName, location: 'Känelboden, Therwil' },
            { dateIso: '2026-10-24', time: '', homeTeam: clubName, awayTeam: 'Atletico Basel', location: 'Rankhof, Basel' },
            { dateIso: '2026-11-01', time: '11:00', homeTeam: 'SC Steinen Basel', awayTeam: clubName, location: 'Sportplatz Einschlag, Basel' }
        ];

        const matchesFF14 = [
            { dateIso: '2026-08-22', time: '11:00', homeTeam: clubName, awayTeam: 'BSC Old Boys b', location: 'Rankhof, Basel' },
            { dateIso: '2026-08-29', time: '11:30', homeTeam: 'FC Gelterkinden', awayTeam: clubName, location: 'Wolfstiege, Gelterkinden' },
            { dateIso: '2026-09-02', time: '', homeTeam: clubName, awayTeam: 'Basel Internationaler FC', location: 'Rankhof, Basel', competition: 'Cup', competitionLabel: 'Juniorinnen FF-14 Cup / Runde 1' },
            { dateIso: '2026-09-05', time: '', homeTeam: clubName, awayTeam: 'SC Dornach', location: 'Rankhof, Basel' },
            { dateIso: '2026-09-12', time: '09:30', homeTeam: 'FC Rheinfelden 1909 rot', awayTeam: clubName, location: 'Schiffacker, Rheinfelden' },
            { dateIso: '2026-09-19', time: '', homeTeam: clubName, awayTeam: 'SC Binningen gold', location: 'Rankhof, Basel' },
            { dateIso: '2026-09-27', time: '11:00', homeTeam: 'FFV Basel', awayTeam: clubName, location: 'Rankhof, Basel' },
            { dateIso: '2026-10-10', time: '', homeTeam: clubName, awayTeam: 'FC Breitenbach', location: 'Rankhof, Basel' },
            { dateIso: '2026-10-18', time: '13:00', homeTeam: 'FC Reinach', awayTeam: clubName, location: 'Fiechten, Reinach' },
            { dateIso: '2026-10-24', time: '', homeTeam: clubName, awayTeam: 'FC Pratteln FF14', location: 'Rankhof, Basel' },
            { dateIso: '2026-11-01', time: '15:00', homeTeam: 'FC Telegraph BS (9v9)', awayTeam: clubName, location: 'Bachgraben, Allschwil' }
        ];

        const matchesC = [
            { dateIso: '2026-08-16', time: '16:30', homeTeam: 'AC Virtus Liestal', awayTeam: clubName, location: 'Stadion Gitterli, Liestal' },
            { dateIso: '2026-08-22', time: '13:00', homeTeam: clubName, awayTeam: 'FC Röschenz Selection', location: 'Rankhof, Basel' },
            { dateIso: '2026-08-29', time: '14:00', homeTeam: 'FC Ettingen rot', awayTeam: clubName, location: 'Sportanlage Hintere Matten, Ettingen' },
            { dateIso: '2026-09-12', time: '', homeTeam: clubName, awayTeam: 'FC Telegraph BS 3', location: 'Rankhof, Basel' },
            { dateIso: '2026-09-19', time: '17:00', homeTeam: 'FC Arlesheim b', awayTeam: clubName, location: 'In den Widen, Arlesheim' },
            { dateIso: '2026-10-10', time: '', homeTeam: clubName, awayTeam: 'FC Oberwil', location: 'Rankhof, Basel' },
            { dateIso: '2026-10-17', time: '13:00', homeTeam: 'FC Zwingen/Breitenbach C2', awayTeam: clubName, location: 'Eichhölzli, Zwingen' },
            { dateIso: '2026-10-24', time: '', homeTeam: clubName, awayTeam: 'SC Steinen Basel', location: 'Rankhof, Basel', homeScore: 0, awayScore: 0, resultCode: 'N', status: 'Nullwertung', cancelled: true }
        ];

        const lastResult = null;

        const initialVisibleMatches = 6;
        let isFF17Expanded = false;
        let isFF14Expanded = false;
        let isCExpanded = false;

        function getDateFromMatch(match) {
            if (match.dateIso) {
                return new Date(`${match.dateIso}T00:00:00`);
            }
            return null;
        }

        function formatMatchDateLabel(match) {
            if (match.dateLabel) return match.dateLabel;
            const date = getDateFromMatch(match);
            if (!date || Number.isNaN(date.getTime())) return '';

            const weekday = new Intl.DateTimeFormat('de-CH', { weekday: 'short' })
                .format(date)
                .replace('.', '');
            const day = new Intl.DateTimeFormat('de-CH', { day: '2-digit' }).format(date);
            const month = new Intl.DateTimeFormat('de-CH', { month: '2-digit' }).format(date);
            return `${weekday}, ${day}.${month}.`;
        }

        function formatMatchDateShort(match) {
            if (match.dateShort) return match.dateShort;
            const date = getDateFromMatch(match);
            if (!date || Number.isNaN(date.getTime())) return '';

            const day = new Intl.DateTimeFormat('de-CH', { day: 'numeric' }).format(date);
            const monthShort = new Intl.DateTimeFormat('de-CH', { month: 'short' })
                .format(date)
                .replace('.', '');
            return `${day}. ${monthShort}`;
        }

        function getAbbreviation(teamName) {
            return teamName
                .split(/\s+/)
                .filter(Boolean)
                .slice(0, 3)
                .map((word) => word[0])
                .join('')
                .toUpperCase();
        }

        function setTeamVisual(side, teamName) {
            const imgEl = document.getElementById(`matchday-${side}-logo-img`);
            const abbrEl = document.getElementById(`matchday-${side}-logo-abbr`);
            if (!imgEl || !abbrEl) return;

            const wrapEl = imgEl.parentElement;
            const isClub = teamName === clubName;
            const logoSrc = isClub ? clubLogoSrc : teamLogos[teamName];
            if (wrapEl) {
                wrapEl.classList.toggle('club', isClub);
            }

            if (logoSrc) {
                imgEl.src = logoSrc;
                imgEl.classList.remove('hidden');
                abbrEl.classList.add('hidden');
            } else {
                abbrEl.textContent = getAbbreviation(teamName);
                abbrEl.classList.remove('hidden');
                imgEl.classList.add('hidden');
            }
        }

        function setResultTeamVisual(side, teamName) {
            const imgEl = document.getElementById(`last-result-${side}-logo-img`);
            const abbrEl = document.getElementById(`last-result-${side}-logo-abbr`);
            if (!imgEl || !abbrEl) return;

            const isClub = teamName === clubName;
            const logoSrc = isClub ? clubLogoSrc : teamLogos[teamName];

            if (logoSrc) {
                imgEl.src = logoSrc;
                imgEl.alt = `${teamName} Logo`;
                imgEl.classList.remove('hidden');
                abbrEl.classList.add('hidden');
            } else {
                abbrEl.textContent = getAbbreviation(teamName);
                abbrEl.classList.remove('hidden');
                imgEl.classList.add('hidden');
            }
        }

        function renderMatchday(match) {
            const matchBadge = document.getElementById('match-badge');
            const homeNameEl = document.getElementById('matchday-home-name');
            const awayNameEl = document.getElementById('matchday-away-name');
            const dateEl = document.getElementById('matchday-date');
            const timeEl = document.getElementById('matchday-time');
            const locationEl = document.getElementById('matchday-location');

            if (!match) {
                if (matchBadge) matchBadge.textContent = 'Kein Spiel geplant';
                if (homeNameEl) homeNameEl.textContent = clubName;
                if (awayNameEl) awayNameEl.textContent = 'Spielplan folgt';
                if (dateEl) dateEl.textContent = '-';
                if (timeEl) timeEl.textContent = '-';
                if (locationEl) locationEl.textContent = '-';
                setTeamVisual('home', clubName);
                setTeamVisual('away', 'Spielplan folgt');
                return;
            }

            const isHomeMatch = match.homeTeam === clubName;
            if (matchBadge) {
                matchBadge.textContent = isHomeMatch ? 'Heimspiel' : 'Auswärtsspiel';
            }

            if (homeNameEl) homeNameEl.textContent = match.homeTeam;
            if (awayNameEl) awayNameEl.textContent = match.awayTeam;

            setTeamVisual('home', match.homeTeam);
            setTeamVisual('away', match.awayTeam);

            if (dateEl) dateEl.textContent = formatMatchDateShort(match);
            if (timeEl) timeEl.textContent = match.time || '-';
            if (locationEl) locationEl.textContent = match.location || '-';
        }

        function getMatchDateTime(match) {
            const baseDate = getDateFromMatch(match);
            if (!baseDate || Number.isNaN(baseDate.getTime())) return null;

            const dateTime = new Date(baseDate);
            if (match.time) {
                const [hours, minutes] = match.time.split(':').map((v) => parseInt(v, 10));
                if (!Number.isNaN(hours) && !Number.isNaN(minutes)) {
                    dateTime.setHours(hours, minutes, 0, 0);
                }
            }
            return dateTime;
        }

        function hasMatchResult(match) {
            return Number.isFinite(match?.homeScore) && Number.isFinite(match?.awayScore);
        }

        function isCancelledMatch(match) {
            return match?.cancelled === true || match?.resultCode === 'N';
        }

        function getNextMatch(list) {
            if (!Array.isArray(list) || list.length === 0) return null;

            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const upcoming = list
                .map((match) => ({ match, dateTime: getMatchDateTime(match) }))
                .filter((entry) => (
                    entry.dateTime &&
                    !Number.isNaN(entry.dateTime.getTime()) &&
                    !hasMatchResult(entry.match) &&
                    !isCancelledMatch(entry.match)
                ))
                .sort((a, b) => a.dateTime - b.dateTime);

            const next = upcoming.find((entry) => entry.dateTime >= today);
            return next?.match || null;
        }

        function getLastPlayedResult(list) {
            if (!Array.isArray(list) || list.length === 0) return null;

            const played = list
                .filter((match) => hasMatchResult(match) && !isCancelledMatch(match))
                .map((match) => ({ match, dateTime: getMatchDateTime(match) }))
                .filter((entry) => (
                    entry.dateTime &&
                    !Number.isNaN(entry.dateTime.getTime()) &&
                    entry.dateTime <= new Date()
                ))
                .sort((a, b) => b.dateTime - a.dateTime);

            return played[0]?.match || null;
        }

        function renderNextMatch(match) {
            const emptyEl = document.getElementById('next-match-empty');
            const contentEl = document.getElementById('next-match-content');
            const metaEl = document.getElementById('next-match-meta');
            const dateEl = document.getElementById('next-match-date');
            const timeEl = document.getElementById('next-match-time');
            const opponentEl = document.getElementById('next-match-opponent');
            const locationEl = document.getElementById('next-match-location');

            if (!match) {
                if (emptyEl) emptyEl.classList.remove('hidden');
                if (contentEl) contentEl.classList.add('hidden');
                return;
            }

            if (emptyEl) emptyEl.classList.add('hidden');
            if (contentEl) contentEl.classList.remove('hidden');

            const isHomeMatch = match.homeTeam === clubName;
            const opponent = isHomeMatch ? match.awayTeam : match.homeTeam;

            if (metaEl) metaEl.textContent = isHomeMatch ? 'Heimspiel' : 'Auswärtsspiel';
            if (dateEl) dateEl.textContent = formatMatchDateShort(match);
            if (timeEl) timeEl.textContent = match.time || '-';
            if (opponentEl) opponentEl.textContent = opponent || clubName;
            if (locationEl) locationEl.textContent = `Ort: ${match.location || '-'}`;
        }

        function renderLastResult(result, matchList) {
            const resolvedResult = result || getLastPlayedResult(matchList);
            const titleEl = document.getElementById('last-result-title');
            const nextMatchPanelEl = document.getElementById('next-match-panel');
            const scoreRowEl = document.getElementById('last-result-score-row');
            const homeScoreEl = document.getElementById('last-result-home-score');
            const awayScoreEl = document.getElementById('last-result-away-score');
            const homeNameEl = document.getElementById('last-result-home-name');
            const awayNameEl = document.getElementById('last-result-away-name');
            const statusEl = document.getElementById('last-result-status');
            const dateEl = document.getElementById('last-result-date');
            const timeEl = document.getElementById('last-result-time');

            if (!resolvedResult) {
                if (titleEl) titleEl.textContent = 'Nächstes Spiel';
                if (nextMatchPanelEl) nextMatchPanelEl.classList.remove('hidden');
                if (scoreRowEl) scoreRowEl.classList.add('hidden');
                if (statusEl) statusEl.classList.add('hidden');
                renderNextMatch(getNextMatch(matchList));
                return;
            }

            if (titleEl) titleEl.textContent = 'Letztes Spiel';
            if (nextMatchPanelEl) nextMatchPanelEl.classList.add('hidden');
            if (scoreRowEl) scoreRowEl.classList.remove('hidden');
            if (statusEl) statusEl.classList.remove('hidden');

            if (homeScoreEl) homeScoreEl.textContent = String(resolvedResult.homeScore);
            if (awayScoreEl) awayScoreEl.textContent = String(resolvedResult.awayScore);
            if (homeNameEl) homeNameEl.textContent = resolvedResult.homeTeam;
            if (awayNameEl) awayNameEl.textContent = resolvedResult.awayTeam;
            if (statusEl) statusEl.textContent = resolvedResult.status || 'Endstand';
            if (dateEl) dateEl.textContent = resolvedResult.dateIso
                ? new Intl.DateTimeFormat('de-CH', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                }).format(getDateFromMatch(resolvedResult))
                : formatMatchDateShort(resolvedResult);
            if (timeEl) timeEl.textContent = resolvedResult.time || '-';

            setResultTeamVisual('home', resolvedResult.homeTeam);
            setResultTeamVisual('away', resolvedResult.awayTeam);
        }

        function buildMatchRow(match, index, totalVisible, officialUrl) {
            const homeIsClub = match.homeTeam === clubName;
            const awayIsClub = match.awayTeam === clubName;
            const borderClass = index === totalVisible - 1 ? '' : 'border-b border-gray-100';

            const homeClasses = homeIsClub ? 'text-bebbi-deep font-bold' : 'text-gray-700';
            const awayClasses = awayIsClub ? 'text-bebbi-deep font-bold' : 'text-gray-700';
            const dateLabel = formatMatchDateLabel(match);
            const location = match.location || '-';
            const time = match.time || '-';
            const resultDisplay = isCancelledMatch(match)
                ? (match.status || 'Abgesagt')
                : match.competition === 'Cup'
                ? 'Cup'
                : hasMatchResult(match)
                ? `${match.homeScore} : ${match.awayScore}${match.resultCode ? ` ${match.resultCode}` : ''}`
                : '-';
            const resultClasses = hasMatchResult(match) || isCancelledMatch(match) || match.competition === 'Cup'
                ? 'font-semibold text-gray-700'
                : 'text-gray-400';

            return `
                <tr class="cursor-pointer hover:bg-bebbi-main/5 transition-colors ${borderClass}" tabindex="0" role="link" data-official-url="${officialUrl}" title="Offizielle Details auf FVNWS öffnen">
                    <td class="px-4 py-3 font-semibold text-gray-800">${dateLabel}</td>
                    <td class="px-4 py-3 text-gray-600">${time}</td>
                    <td class="px-4 py-3 text-right ${homeClasses}">${match.homeTeam}</td>
                    <td class="px-4 py-3 text-center ${resultClasses}">${resultDisplay}</td>
                    <td class="px-4 py-3 ${awayClasses}">${match.awayTeam}</td>
                    <td class="px-4 py-3 text-gray-500">${location}<span class="ml-2 text-[11px] font-bold uppercase tracking-[0.16em] text-bebbi-main">FVNWS</span></td>
                </tr>
            `;
        }

        function renderMatchList(list, bodyId, toggleId, labelId, isExpanded, officialUrl) {
            const matchListBody = document.getElementById(bodyId);
            const toggleButton = document.getElementById(toggleId);
            const toggleLabel = document.getElementById(labelId);
            if (!matchListBody || !toggleButton || !toggleLabel) return;

            const hasMoreThanInitial = list.length > initialVisibleMatches;
            const visibleMatches = hasMoreThanInitial && !isExpanded
                ? list.slice(0, initialVisibleMatches)
                : list;

            matchListBody.innerHTML = visibleMatches
                .map((match, index) => buildMatchRow(
                    match,
                    index,
                    visibleMatches.length,
                    match.officialUrl || officialUrl
                ))
                .join('');

            matchListBody.querySelectorAll('tr[data-official-url]').forEach((row) => {
                const openOfficial = () => {
                    const url = row.getAttribute('data-official-url');
                    if (!url) return;
                    window.open(url, '_blank', 'noopener,noreferrer');
                };

                row.addEventListener('click', openOfficial);
                row.addEventListener('keydown', (event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        openOfficial();
                    }
                });
            });

            toggleButton.classList.toggle('hidden', !hasMoreThanInitial);
            toggleButton.classList.toggle('is-expanded', hasMoreThanInitial && isExpanded);
            toggleLabel.textContent = isExpanded ? 'Weniger anzeigen' : 'Mehr anzeigen';
        }

        const scheduleConfig = {
            ff17: {
                matches: matchesFF17,
                label: 'Juniorinnen FF-17 2. Stärkeklasse / Herbstrunde 2026',
                officialUrl: 'https://matchcenter.fvnws.ch/default.aspx?a=pt&lng=1&ls=25808&oid=8&sg=70260&t=79287&v=1827266'
            },
            ff14: {
                matches: matchesFF14,
                label: 'Juniorinnen FF-14 (9v9) / Herbstrunde / Gruppe 2',
                officialUrl: 'https://matchcenter.fvnws.ch/default.aspx?a=pt&lng=1&ls=25810&oid=8&sg=70263&t=79298&v=1827266'
            },
            c: {
                matches: matchesC,
                label: 'Meisterschaft Junioren C 1. Stärkeklasse / Herbstrunde / Gruppe 5',
                officialUrl: 'https://matchcenter.fvnws.ch/default.aspx?a=pt&lng=1&ls=26135&oid=8&sg=71116&t=79304&v=1827266'
            }
        };

        function renderMatchdayForTab(tab) {
            const config = scheduleConfig[tab] || scheduleConfig.ff17;
            const matchdayMatch = getNextMatch(config.matches) || getLastPlayedResult(config.matches);
            renderMatchday(matchdayMatch);
            renderLastResult(lastResult, config.matches);
            const activeCompetitionLabel = matchdayMatch?.competitionLabel || config.label;

            const competitionEl = document.getElementById('matchday-competition');
            if (competitionEl) {
                competitionEl.textContent = activeCompetitionLabel;
            }

            const resultContextEl = document.getElementById('last-result-context');
            if (resultContextEl) {
                resultContextEl.textContent = activeCompetitionLabel;
            }
        }

        const matchListToggleFF17 = document.getElementById('match-list-toggle-ff17');
        if (matchListToggleFF17) {
            matchListToggleFF17.addEventListener('click', () => {
                isFF17Expanded = !isFF17Expanded;
                renderMatchList(matchesFF17, 'match-list-body-ff17', 'match-list-toggle-ff17',
                    'match-list-toggle-label-ff17', isFF17Expanded, scheduleConfig.ff17.officialUrl);
            });
        }

        const matchListToggleFF14 = document.getElementById('match-list-toggle-ff14');
        if (matchListToggleFF14) {
            matchListToggleFF14.addEventListener('click', () => {
                isFF14Expanded = !isFF14Expanded;
                renderMatchList(matchesFF14, 'match-list-body-ff14', 'match-list-toggle-ff14',
                    'match-list-toggle-label-ff14', isFF14Expanded, scheduleConfig.ff14.officialUrl);
            });
        }

        const matchListToggleC = document.getElementById('match-list-toggle-c');
        if (matchListToggleC) {
            matchListToggleC.addEventListener('click', () => {
                isCExpanded = !isCExpanded;
                renderMatchList(matchesC, 'match-list-body-c', 'match-list-toggle-c',
                    'match-list-toggle-label-c', isCExpanded, scheduleConfig.c.officialUrl);
            });
        }

        function setActiveScheduleTab(tab) {
            const tabs = document.querySelectorAll('[data-schedule-tab]');
            const ff17Section = document.getElementById('schedule-ff17');
            const ff14Section = document.getElementById('schedule-ff14');
            const cSection = document.getElementById('schedule-c');
            const fullScheduleLink = document.getElementById('schedule-full-link');
            const config = scheduleConfig[tab] || scheduleConfig.ff17;

            if (ff17Section) ff17Section.classList.toggle('hidden', tab !== 'ff17');
            if (ff14Section) ff14Section.classList.toggle('hidden', tab !== 'ff14');
            if (cSection) cSection.classList.toggle('hidden', tab !== 'c');

            tabs.forEach((button) => {
                const isActive = button.getAttribute('data-schedule-tab') === tab;
                button.classList.toggle('bg-bebbi-main', isActive);
                button.classList.toggle('text-white', isActive);
                button.classList.toggle('shadow-glow', isActive);
                button.classList.toggle('bg-white', !isActive);
                button.classList.toggle('text-bebbi-deep', !isActive);
                button.classList.toggle('border', !isActive);
                button.classList.toggle('border-gray-200', !isActive);
            });

            if (fullScheduleLink) {
                fullScheduleLink.href = config.officialUrl;
            }

            renderMatchdayForTab(tab);
        }

        document.querySelectorAll('[data-schedule-tab]').forEach((button) => {
            button.addEventListener('click', () => {
                const tab = button.getAttribute('data-schedule-tab');
                setActiveScheduleTab(tab);
            });
        });

        renderMatchdayForTab('ff17');
        renderMatchList(matchesFF17, 'match-list-body-ff17', 'match-list-toggle-ff17',
            'match-list-toggle-label-ff17', isFF17Expanded, scheduleConfig.ff17.officialUrl);
        renderMatchList(matchesFF14, 'match-list-body-ff14', 'match-list-toggle-ff14',
            'match-list-toggle-label-ff14', isFF14Expanded, scheduleConfig.ff14.officialUrl);
        renderMatchList(matchesC, 'match-list-body-c', 'match-list-toggle-c',
            'match-list-toggle-label-c', isCExpanded, scheduleConfig.c.officialUrl);
        setActiveScheduleTab('ff17');
        initContactForm();

        if (window.__legacySiteResizeHandler) {
            window.removeEventListener('resize', window.__legacySiteResizeHandler);
        }

        window.__legacySiteResizeHandler = () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', window.__legacySiteResizeHandler);

        document.querySelectorAll('#mobile-menu a').forEach((link) => {
            link.addEventListener('click', () => {
                setMenuOpen(false);
            });
        });

        // --- ANIMATION LOGIC ---

        // 1. Intersection Observer for Scroll Reveals
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');

                    // Special Trigger for Matchcenter Badge
                    if (entry.target.id === 'matchcenter') {
                        const matchBadge = document.getElementById('match-badge');
                        if (matchBadge) {
                            matchBadge.classList.remove('opacity-0', 'translate-x-10');
                        }
                    }

                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
            observer.observe(el);
        });
})();
